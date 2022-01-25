import { FC } from 'react';
import { sunriseIcon, sunsetIcon } from '~/assets/icons';
import {
  ContainerClimateDetails,
  ContainerDetails,
  ContainerDetailsItem,
  ImageIcon,
  Text,
} from './styles';

type Props = {
  sunrise: string;
  sunset: string;
  feelsLike: number;
  humidity: number;
  speedFormat: string;
};

const ClimateDetails: FC<Props> = ({
  sunrise,
  sunset,
  feelsLike,
  humidity,
  speedFormat,
}) => {
  return (
    <ContainerClimateDetails>
      <ContainerDetails>
        <ContainerDetailsItem>
          <Text>Nascer do Sol</Text>
          <ImageIcon src={sunriseIcon} />
          <Text>{sunrise}</Text>
        </ContainerDetailsItem>
        <ContainerDetailsItem>
          <Text>Pôr do Sol</Text>
          <ImageIcon src={sunsetIcon} />
          <Text>{sunset}</Text>
        </ContainerDetailsItem>
      </ContainerDetails>
      <ContainerDetails>
        <ContainerDetailsItem>
          <Text>Sensação</Text>
          <Text>{feelsLike}℃</Text>
        </ContainerDetailsItem>
        <ContainerDetailsItem>
          <Text>Umidade</Text>
          <Text>{humidity}%</Text>
        </ContainerDetailsItem>
      </ContainerDetails>
      <ContainerDetails>
        <ContainerDetailsItem>
          <Text>Vel. do Vento</Text>
          <Text>{speedFormat}km/h</Text>
        </ContainerDetailsItem>
      </ContainerDetails>
    </ContainerClimateDetails>
  );
};

export default ClimateDetails;
