import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-web";

function Data() {
  const [Show, setShow] = useState(true);
  const [Model, setModel] = useState(false);
  const [data, setData] = useState([]);
  const [Search, setSearch] =useState('')
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [Id, setId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { name, email };
    setData([...data, newData]);
    axios
      .post("http://localhost:3001/posts", newData)
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    setModel(false);
  };

  const handleDelete = (itemId) => {
    // console.log(itemId)
    axios
      .delete(`http://localhost:3001/posts/${itemId}`)
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleView = (val) => {
    setModel(true);
    setShow(false);
    onChangeName(val.name);
    onChangeEmail(val.email);
    setId(val.id);
  };

  const handleUpdate = () => {
    const newData = { name, email };
    setData([...data, newData]);
    axios
      .put(`http://localhost:3001/posts/${Id}`, newData)
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  return (
    <>
      {/*       
        <Image
        style={{ width: 500, height: 280 }}
        source={require("../assets/images.jpg")}
      /> */}
      <View style={[styles.header, { margin: "50px" }]}>
      <TextInput
                placeholder="Search User Information"
                onChangeText={setSearch}
                style={[styles.input,{marginRight:20}]}
              />
              
        <Button title="➕ Add" onPress={() => setModel(true)} />
      </View>
      <Modal visible={Model} transparent={true} animationType="slide" presentationStyle="pageSheet" onRequestClose={()=>setModel(false)}>
        <View style={styles.header}>
          <View style={styles.forms}>
            <Text style={styles.contentText}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              // onChangeText = {(val)=>{
              //   setName((pre) => ({...pre, name: val}))
              // }}
              value={name}
            />
            <Text style={styles.contentText}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
              }}
            >
              <Button onPress={() => setModel(false)} title="❌" />

              {!Show ? (
                <Button onPress={handleUpdate} title="Update" />
              ) : (
                <Button onPress={handleSubmit} title="Submit" />
              )}
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        {/* <FlatList
          style={{ margin: "20px" }}
          data={data}
          renderItem={({ item, index }) => (
            <View style={styles.main} key={index}>
              <View style={styles.card}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.contentText}>Name : ~</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.contentText}>Email : ~</Text>
                  <Text>{item.email}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Button
                    title="Delete"
                    onPress={() => handleDelete(item.id)}
                  />
                  <Button title="Edit" onPress={() => handleView(item)} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        /> */}
        {data?.filter((item) => {
            return Search.toLowerCase() == ""
              ? item
              : item.name.toLowerCase().includes(Search.toLowerCase())               
              ? item
              : item.email.toLowerCase().includes(Search.toLowerCase());
          })?.map((item, index) => (
            <View style={styles.main} key={index}>
              <View style={styles.card}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.contentText}>Name : ~</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.contentText}>Email : ~</Text>
                  <Text>{item.email}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                  <Button
                    title="Delete"
                    onPress={() => handleDelete(item.id)}
                  />
                  <Button title="Edit" onPress={() => handleView(item)} />
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forms: {
    height: 400,
    width: 300,
    backgroundColor: "#000000ad",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 50,
    borderRadius: 5,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    padding: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: 200,
    color: "white",
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    backgroundColor: "#c8c8c870",
    padding: 30,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  contentMain: {
    display: "flex",
  },
});

export default Data;
