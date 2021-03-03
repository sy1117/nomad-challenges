// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
import { Mutation, Query, Args, Resolver } from '@nestjs/graphql';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

// @Controller('/podcasts')
@Resolver(() => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((type) => [Podcast])
  getAllPodcasts() {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation()
  createPodcast(@Args('createPodcastDto') createPodcastDto: CreatePodcastDto) {
    return this.podcastsService.createPodcast(createPodcastDto);
  }

  @Query((type) => Podcast)
  getPodcast(@Args('id') id: string) {
    return this.podcastsService.getPodcast(id);
  }

  @Mutation()
  updatePodcast(
    @Args('id') id: string,
    @Args('updatePodcastDto') updatePodcastDto: UpdatePodcastDto,
  ) {
    return this.podcastsService.updatePodcast(id, updatePodcastDto);
  }

  @Mutation()
  deletePodcast(@Args('id') id: string) {
    return this.podcastsService.deletePodcast(id);
  }
}

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(private readonly podcastService: PodcastsService) {}
  // @Get('/episodes')
  @Query(() => [Episode])
  getEpisodes(@Args('id') podcastId: string) {
    return this.podcastService.getEpisodes(podcastId);
  }

  // @Post('/episodes')
  @Mutation()
  createEpisode(
    @Args('id') podcastId: string,
    @Args('createEpisodeDto') createEpisodeDto: CreateEpisodeDto,
  ) {
    return this.podcastService.createEpisode(podcastId, createEpisodeDto);
  }

  // @Patch('/episodes/:episodeId')
  @Mutation()
  updateEpisode(
    @Args('id') podcastId: string,
    @Args('episodeId') episodeId: string,
    @Args('updateEpisodeDto') updateEpisodeDto: UpdateEpisodeDto,
  ) {
    return this.podcastService.updateEpisode(
      podcastId,
      episodeId,
      updateEpisodeDto,
    );
  }

  // @Delete('/episodes/:episodeId')
  @Mutation()
  deleteEpisode(
    @Args('id') podcastId: string,
    @Args('episodeId') episodeId: string,
  ) {
    return this.podcastService.deleteEpisode(podcastId, episodeId);
  }
}
