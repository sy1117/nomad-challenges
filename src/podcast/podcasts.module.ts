import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { EpisodesResolver, PodcastsResolver } from './podcasts.resolver';

@Module({
  // controllers: [PodcastsController, EpisodeController],
  providers: [PodcastsService, EpisodesResolver, PodcastsResolver],
  // providers: [PodcastsService],
})
export class PodcastsModule {}
