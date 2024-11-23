import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { NavbarRoutes } from '../modules/DataManagement/Navbar/navbar.route';
import { BannerRoutes } from '../modules/DataManagement/Banner/banner.route';
import { HistoryRoutes } from '../modules/DataManagement/About/History/history.route';
import { GlanceRoutes } from '../modules/DataManagement/About/Glance/glance.route';
import { AchievementRoutes } from '../modules/DataManagement/About/Achievement/achievement.route';
import { WhyStudyRoutes } from '../modules/DataManagement/About/WhyStudyHere/why.study.here.route';
import { EventsRoutes } from '../modules/DataManagement/About/Events/events.route';
import { SchoolFeatureRoutes } from '../modules/DataManagement/School-Features/school-features.route';
import { ExplorePointRoutes } from '../modules/DataManagement/Explore-point/explore-point.route';
import { FolderRoutes } from '../modules/DataManagement/Stock-gallery/Create-folder/folder.route';
import { FacilitiesRoutes } from '../modules/DataManagement/Facilities/facilities.route';
import { PhotoGalleryRoutes } from '../modules/DataManagement/Photo-gallery/photo-gallery.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: AuthRoutes,
  },
  {
    path: '/navbar',
    route: NavbarRoutes,
  },
  {
    path: '/banner',
    route: BannerRoutes,
  },
  {
    path: '/history',
    route: HistoryRoutes,
  },
  {
    path: '/glance',
    route: GlanceRoutes,
  },
  {
    path: '/achievement',
    route: AchievementRoutes,
  },
  {
    path: '/why-study',
    route: WhyStudyRoutes,
  },
  {
    path: '/events',
    route: EventsRoutes,
  },
  {
    path: '/school-features',
    route: SchoolFeatureRoutes,
  },
  {
    path: '/explore-point',
    route: ExplorePointRoutes,
  },
  {
    path: '/folder',
    route: FolderRoutes,
  },
  {
    path: '/facilities',
    route: FacilitiesRoutes,
  },
  {
    path: '/photo-gallery',
    route: PhotoGalleryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
