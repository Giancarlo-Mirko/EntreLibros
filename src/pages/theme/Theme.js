import { colors, media, borders, fonts } from './fundations';

const theme = () => {
  return {
    /* Colors */
    color: {
      background1: colors.background.oscuro,
      background2: colors.background.oscuro2,
      background3: colors.background.oscuro3,
      border: colors.border.primary,
      text1: colors.text.primary,
      info1: colors.info.primary,
      info2: colors.info.secondary,
    },
    /* Borders */
    border: borders,
    /* Media */
    media: {
      mediaXS: media.xs,
      mediaMD: media.md,
      mediaLG: media.lg,
      mediaXL: media.xl,
    },
    /* Fonts */
    font: fonts,
  };
};

export default theme;
