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
import {
  CreateEpisodeDto,
  CreateEpisodeResponse,
} from './dtos/create-episode.dto';
import {
  CreatePodcastDto,
  CreatePodcastResponse,
} from './dtos/create-podcast.dto';
import {
  UpdateEpisodeDto,
  UpdateEpisodeResponse,
} from './dtos/update-episode.dto';
import {
  UpdatePodcastDto,
  UpdatePodcastResponse,
} from './dtos/update-podcast.dto';
import { Response } from '../common/dto/Response.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';
import {
  GetPodCastResponse,
  GetAllPodCastsResponse,
} from './dtos/get-podcast.dto';
import { GetEpisodesIdResponse } from './dtos/get-episode.dto';

// @Controller('/podcasts')
@Resolver(() => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((type) => GetAllPodCastsResponse)
  getAllPodcasts() {
    const result = this.podcastsService.getAllPodcasts();
    return result;
  }

  @Mutation((returns) => CreatePodcastResponse)
  createPodcast(@Args('createPodcastDto') createPodcastDto: CreatePodcastDto) {
    const result = this.podcastsService.createPodcast(createPodcastDto);
    return result;
  }

  @Query((type) => GetPodCastResponse)
  getPodcast(@Args('id') id: string) {
    const result = this.podcastsService.getPodcast(id);
    return result;
  }

  @Mutation((returns) => UpdatePodcastResponse)
  updatePodcast(
    @Args('id') id: string,
    @Args('updatePodcastDto') updatePodcastDto: UpdatePodcastDto,
  ) {
    return this.podcastsService.updatePodcast(id, updatePodcastDto);
  }

  @Mutation((returns) => Response)
  deletePodcast(@Args('id') id: string) {
    return this.podcastsService.deletePodcast(id);
  }
}

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(private readonly podcastService: PodcastsService) {}
  // @Get('/episodes')
  @Query(() => GetEpisodesIdResponse)
  getEpisodes(@Args('id') podcastId: string) {
    return this.podcastService.getEpisodes(podcastId);
  }

  // @Post('/episodes')
  @Mutation((returns) => CreateEpisodeResponse)
  createEpisode(
    @Args('id') podcastId: string,
    @Args('createEpisodeDto') createEpisodeDto: CreateEpisodeDto,
  ) {
    return this.podcastService.createEpisode(podcastId, createEpisodeDto);
  }

  // @Patch('/episodes/:episodeId')
  @Mutation((returns) => UpdateEpisodeResponse)
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
  @Mutation((returns) => Response)
  deleteEpisode(
    @Args('id') podcastId: string,
    @Args('episodeId') episodeId: string,
  ) {
    return this.podcastService.deleteEpisode(podcastId, episodeId);
  }
}
