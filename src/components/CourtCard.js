import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import orange from '@material-ui/core/colors/orange';
import Box from '@material-ui/core/Box';
import IconList from "./IconList";

const useStyles = makeStyles({
  root: {
    maxWidth: 414,
  },
  media: {
    height: 140,
  },
});

export default function CourtCard() {
  const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/images/football-court.jpg" // Der Artikel wird verändert werden. Aus dem Courts Object - ImageName
                    title="Football Court" // Der Artikel wird verändert werden. Aus dem Courts Object - Type
                />

                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        Milano Academy {/* Der Artikel wird verändert werden. Aus dem Courts Object - Name */}
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <Box display="flex" p={1} bgcolor="background.paper" alignItems="center">
                            <Icon fontSize="small" style={{ color: orange[300] }}>star</Icon>
                            <Typography variant="h7" component="h7">
                                LikedBy {/* Der Artikel wird verändert werden. Aus dem Courts Object - LikedBy */}
                            </Typography>
                            <Typography variant="h7" component="h7">
                                &nbsp;- 4291 Rogahn Terrace {/* Der Artikel wird verändert werden. Aus dem Courts Object - LikedBy */}
                            </Typography>
                        </Box>
                    </div>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Modern football field, based on the football academy of the AC Milan. Open to everyone since 2017.
                        Free amateur friday tournaments.
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <Box display="flex" p={1} bgcolor="background.paper" justifyContent="space-between">
                            <Typography variant="button" display="block" gutterBottom>
                                Natural Grass {/* Der Artikel wird verändert werden. Aus dem Courts Object - groundType */}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                40x70m {/* Der Artikel wird verändert werden. Aus dem Courts Object - courtSize */}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                Outdoor {/* Der Artikel wird verändert werden. Aus dem Courts Object - courtType */}
                            </Typography>
                        </Box>
                    </div>
                    <div id="divIconList">
                        <IconList />
                    </div>
                </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            );
}