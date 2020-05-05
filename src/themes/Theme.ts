import { FontSize, FONT_SIZE } from './Font';
import { MediaQuery, Device, MEDIA_QUERY, DEVICE } from './Media';
import { Palette, PALETTE } from './Palette';

export interface Theme {
  palette: Palette;
  fontSize: FontSize;
  media: MediaQuery;
  device: Device;
}

export const theme = () => {
  const freyTheme: Theme = {
    palette: PALETTE,
    fontSize: FONT_SIZE,
    media: MEDIA_QUERY,
    device: DEVICE,
  };

  return freyTheme;
};
