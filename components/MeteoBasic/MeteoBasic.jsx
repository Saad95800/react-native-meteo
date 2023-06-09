import { Image, View, TouchableOpacity } from "react-native";

import { Clock } from "../Clock/Clock";
import { Txt } from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ onPress, city, temperature, interpretation }) {
  return (
    <>
	      <View style={s.timeContainer}>
	        <Clock/>
	      </View>

	      <View>
	        <Txt style={{ fontSize: 30 }}>{city}</Txt>
	      </View>

	      <View style={s.weather}>
	        <Txt style={s.interpretation_label}>{interpretation.label}</Txt>
	      </View>

	      <View style={s.temperatureContainer}>
		  <TouchableOpacity onPress={onPress}>
		  	<Txt style={s.temperature}>{temperature}°</Txt>
		  </TouchableOpacity>
	        <Image style={s.image} source={interpretation.image} />
	      </View>
	    </>
  );
}
