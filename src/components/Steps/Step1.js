import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Img1 from '../../assets/img/step1_img1.png'
import Img2 from '../../assets/img/step1_img2.png'

const useStyles = makeStyles(() => ({
  imagesRow: {
    padding: "40px 30px",
  },
  bottomSpacing: {
    marginBottom: '2rem',
  },
  gridItem: {
    textAlign: 'center',
    '& img':{
      maxWidth: 150
    }
  },
  subtitle: {
    marginBottom: '0.4rem'
  }
}));

const Step1 = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.imagesRow}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={5} className={classes.gridItem}>
          <img src={Img1} alt="Guarda aquí tus contraseñas" />
          <Typography variant="body1" color="secondary">
            Guarda aquí todas tus contraseñas, datos o cualquier información,
            olvida las notas de papel y las aplicaciones no protegidas.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.gridItem}>
        <img src={Img2} alt="Guarda aquí tus contraseñas" />
          <Typography variant="body1" color="secondary">
            Crea tu clave maestra: solo tú podrás acceder a tus secretos con
            ella.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.bottomSpacing}>
          <Typography variant="subtitle1" color="secondary" className={classes.subtitle}>
            Cómo funciona
          </Typography>
          <Typography variant="body1">
            En primer lugar, debes crear una contraseña diferente para sus
            pertenencias electrónicas. No podrás recuperar tu contraseña, asi
            que recuérdela bien.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary" className={classes.subtitle}>
            Qué datos puedes guardar
          </Typography>
          <Typography variant="body1">
            Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
            móvil, el número de serie de alguno de tus dispositivos o cualquier
            informacion que necesites tener en un lugar seguro.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;
