import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaUserFriends, FaUserPlus, FaNewspaper, FaPlus, FaRegBuilding, FaCodeBranch, FaFileAlt } from "react-icons/fa";
import styled from 'styled-components';

interface IProps {
	title: string;
	icon?: string;
	description: string;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Icon = styled(FaNewspaper)`
  font-size:3rem;
  padding: 20px 0 0 20px;
  `;

export const WorkspaceCard: FC<IProps> = ({title, icon, description}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Icon />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">                        
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}