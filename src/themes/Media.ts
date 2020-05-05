export interface MediaQuery {
  MOBILE: number;
  TABLET: number;
  TABLET_PRO: number;
  LAPTOP: number;
}

export interface Device {
  MOBILE: string;
  TABLET: string;
  LAPTOP: string;
}

export const MEDIA_QUERY: MediaQuery = { MOBILE: 480, TABLET: 768, TABLET_PRO: 1024, LAPTOP: 1024 };
export const DEVICE: Device = {
  MOBILE: `(max-width: ${MEDIA_QUERY.MOBILE}px)`,
  TABLET: `(min-width: ${MEDIA_QUERY.TABLET}px) and (max-width: ${MEDIA_QUERY.TABLET_PRO}px)`,
  LAPTOP: `(min-width: ${MEDIA_QUERY.LAPTOP}px)`,
};
