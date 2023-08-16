import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleOpen} style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.icon}>{isOpen ? "-" : "+"}</Text>
        </TouchableOpacity>
        {isOpen && <Text style={styles.content}>{content}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.mainGreen,
    padding: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  icon: {
    fontSize: 30,
    color: COLORS.darkGreen,
  },
  content: {
    marginTop: 20,
    color: COLORS.darkGray,
  },
});

export default AccordionItem;
