import { FC } from 'react';
import {
  IconsWeather,
  ContainerClimateDetails,
  ContainerMaxMinTemp,
  Text,
} from './styles';

type Props = {
  tempMin: number;
  tempMax: number;
  icon: Icon.Name;
};

const ClimateDetails: FC<Props> = ({ tempMin, tempMax, icon }) => {
  return (
    <ContainerClimateDetails>
      <ContainerMaxMinTemp>
        <Text>MIN.</Text>
        <Text>{tempMin}℃</Text>
      </ContainerMaxMinTemp>
      <ContainerMaxMinTemp>
        <IconsWeather icon={icon} />
      </ContainerMaxMinTemp>
      <ContainerMaxMinTemp>
        <Text>MÁX.</Text>
        <Text>{tempMax}℃</Text>
      </ContainerMaxMinTemp>
    </ContainerClimateDetails>
  );
};

export default ClimateDetails;
