import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  register_screen: {
    // backgroundColor: "#fff5e7",
    backgroundImage: 'linear-gradient(120deg, rgba(255,245,231,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,245,231,1) 100%)',
    // backgroundColor: "#fff",
    flex: 1,
    width: 425,
    height: 547,
    alignItems: "center",
    justifyContent: "center",
  },
  register_content: {
    alignItems: "center",
    justifyContent: "center",
  },
  register_heading: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
  },
  register_text: {
    textAlign: "center",
    fontSize: 16,
    padding: "30px",
    fontWeight:500,
  },
  register_input_area: {
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  register_input: {
    textAlign: "center",
    width: 50,
    height: 50,
    border: "1px solid gray",
    borderRadius: 10,
  },
  register_btn: {
    backgroundColor: "#f1b964",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    fontSize: 20,
    fontWeight: 600,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 150,
    paddingRight: 150,
  },
});
