/**
 * Main app module
 */
@Module({
  controllers: [],
  imports: [CommonModule],
  providers: [PackCommand, UnPackCommand]
})
export class AppModule {}
