import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native-web";
import axios from "axios";
import { BASE_URL, GET_PRODUCT_DATA } from "../constant";

const Card = () => {
  const width = useWindowDimensions()
  const height = useWindowDimensions()
  const [isHovered, setIsHovered] = useState([false, false]);
  const [Data, setData] = useState([]);
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  //   screen: Dimensions.get("screen"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return () => subscription?.remove();
  // }, []);

  // const { window } = dimensions;
  // console.log(window);
  // const width = window;
  // const height = window;

  const handleMouseEnter = (index) => {
    const updatedHoverStates = [...isHovered];
    updatedHoverStates[index] = true;

    setIsHovered(updatedHoverStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...isHovered];
    updatedHoverStates[index] = false;
    setIsHovered(updatedHoverStates);
  };

  useEffect(() => {
    try {
      axios.get(BASE_URL + GET_PRODUCT_DATA).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ScrollView style={{flex:1}}>
      <View style={{ justifyContent: "center", alignItems: "center"}}>
        {Data?.map((item, index) => (
          <View
            style={[
              styles.card,
              {
                width: width > 500 ? "75%" : "90%",
                height: height > 600 ? "44x%" : "10%",
              },
            ]}
            key={index}
          >
            <Image source={item.productImage} style={styles.image} />
            <View style={styles.body}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    styles.card_heading,
                    { fontSize: width > 500 ? "16px" : "20px" },
                  ]}
                >
                  {item.productName}
                </Text>
                <Text style={styles.card_label}>$ {item.productPrice}</Text>
              </View>
              <Text style={styles.card_dec}>{item.productDescription}</Text>
              <Pressable
                style={[styles.button, isHovered[index] && styles.buttonHover]}
                onPress={() => {}}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Text style={styles.button_text}>Add to cart</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    // width: windowWidth > 500 ? "75%" : "90%",
    // height: windowHeight > 600 ? "44x%" : "40%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#3c3c3c",
    margin: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  card_heading: {
    color: "#fff",
    // fontSize: windowWidth > 500 ? "16  " : "20",
    fontWeight: "bold",
    padding: 10,
  },
  card_label: {
    color: "#000",
    backgroundColor: "#ed91eda8",
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    margin: 5,
  },
  card_dec: {
    color: "#fff",
    fontSize: 12,
    padding: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    border: "2px solid #ed91eda8",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transition: "all 0.5s",
  },
  button_text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonHover: {
    backgroundColor: "#dda0dd",
  },
});
export default Card;
