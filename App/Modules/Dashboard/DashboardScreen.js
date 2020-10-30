import React, { Component } from "react";
import {
    View,
    FlatList,
    ActivityIndicator
} from "react-native";

import Item from "./Item";
import styles from './DashboardStyle';
import EmployeeActions from 'App/Stores/Employee/Actions'
import { connect } from 'react-redux'

class DashboardScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.employeeList({});
    }
    render() {
        const { employees, employeeIsLoading } = this.props;
        return (
            <View style={styles.dContainer}>
                {employeeIsLoading ? <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View> : <FlatList
                        data={employees}
                        renderItem={(item) =>
                            <Item item={item} />
                        }
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
        employees: state.employee.employeeList,
        employeeIsLoading: state.employee.employeeListLoading
    })

const mapDispatchToProps = (dispatch) => ({
    employeeList: (params) => dispatch(EmployeeActions.employeeList(params)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardScreen)