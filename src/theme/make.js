import { makeStyles } from '@material-ui/core/styles';

/**
 * @param theme
 * @returns {Object}
 */
const defaultTheme = (theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
});

/**
 * @param getStyles
 * @returns {(theme: Object) => any}
 */
export default (getStyles = (theme = {}) => defaultTheme(theme)) =>
  makeStyles((theme) => getStyles(theme));
