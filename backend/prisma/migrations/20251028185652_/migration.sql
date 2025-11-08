-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;
