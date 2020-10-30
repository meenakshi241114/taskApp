import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import styles from './DashboardStyle';

class Item extends Component {
    render() {
        const { item } = this.props.item;
        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.section}>
                        <Text style={styles.key}> Name</Text>
                        <Text style={styles.value}>{item.name}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.key}> Age</Text>
                        <Text style={styles.value}>{item.age}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.key}> Gender</Text>
                        <Text style={styles.value}>{item.gender}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.key}> Email</Text>
                        <Text style={styles.value}>{item.email}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.key}> Phone</Text>
                        <Text style={styles.value}>{item.phoneNo}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default Item;