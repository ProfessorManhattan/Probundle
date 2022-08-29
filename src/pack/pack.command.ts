import { CommandRunner } from 'nest-commander'
import fs from 'node:fs'
import path from 'node:path'
import tar from 'tar'
import { LogService } from '../common/common'
/**
 * Class for the `app pack [package]` command
 */
@Command({
  argsDescription: {
    task: 'Specific package from node_modules folder to compress and store in the .modules folder as a .tgz file'
  },
  arguments: '[package]',
  description: 'Compresses modules in the node_modules folder and stores them in the .modules folder',
  name: 'pack',
  options: {
    isDefault: true
  }
})
export class PackCommand implements CommandRunner {
  private readonly moduleLocation = '.modules'

  /**
   * Constructor for the [[RunCommand]]
   *
   * @param logger - The logger service
   */
  constructor(private readonly logger: LogService) {
    logger.setContext(PackCommand.name)
  }

  /**
   * Default function called when this command is called
   *
   * @param passedParameter - Parameters used by command
   * @param options - Options used by command
   */
  public async run(passedParameter: readonly string[], options?: Record<string, string>): Promise<void> {
    await this.logger.verbose('run() parameters:', passedParameter, options)
    await this.logger.log('`run` option selected.')
  }

  public async compress(location: string, _output: string) {
    await tar
      .create(
        {
          gzip: true
        },
        [location]
      )
      .pipe(fs.createWriteStream(`${this.moduleLocation}/${path.basename(location)}`))
  }

  /**
   * Allows user to customize location of the `.modules/` directory
   *
   * @param value - Path to the custom directory
   * @returns The full path
   */
  @Option({
    description: 'The path to the directory to store the compressed *.tgz packages',
    flags: '-m, --modules [string]'
  })
  public parseModuleLocation(value: string): string {
    this.logger.verbose('parseString() parameters:', value)

    return `${value}yay`
  }
}
