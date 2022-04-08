require "language/node"

class Probundle < Formula
  desc "A tool that handles compressing, bundling, and unpacking production node_modules dependencies that you want to store in source control"
  homepage "https://megabyte.space"
  url "https://registry.npmjs.org/probundle/-/probundle-3.10.3.tgz"
  sha256 ""
  license "MIT"

  

  depends_on "node" => :build

  def install
    system "npm", "install", *Language::Node.std_npm_install_args(libexec)
    bin.install_symlink Dir["#{libexec}/bin/*"]
  end

  test do
    output = shell_output("#{bin}/probundle --help 2>&1", 1)
    assert_match "You can log in via contentful login", output
    assert_match "Or provide a management token via --management-token argument", output
  end
end
