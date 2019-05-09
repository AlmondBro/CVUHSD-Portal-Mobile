import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, Dimensions } from 'react-native';

import BlueSection from "./BlueSection/BlueSection.js"
import Header from "./Header.js"

import { staffPortalButtons } from "./staffPortalButtons.js";
//rgb(30, 108, 147)
// #F4F7F9
const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#F4F7F9',
    padding: 0,
    margin: 0
  },

  scrollView: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    backgroundColor: '#F4F7F9'
  },

  blueSectionContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0
  }
});

class App extends Component {
  getWidth = () => {
    return {
        width: Dimensions.get('window').width
    }
  }

  getHeight= () => {
    return {
        height: Dimensions.get('window').height
    }
  }

  render() {
    return (
      <SafeAreaView style={appStyles.container}>
        <ScrollView contentContainerStyle={appStyles.scrollView}>
          <Header />
          {/*  Had to hardcode the width of this view to get it to stretch horizontally
                using the Dimensions module 
            */}
          <View style={[appStyles.blueSectionContainer, this.getWidth()]}>
            <BlueSection 
              title="System Statuses" 
              expanded={false}
              serviceStatuses={true}
            />
            <BlueSection 
              title="Quick Links" 
              expanded={true}
              buttons={staffPortalButtons.quickLinks}
            />
              <BlueSection 
              title="Standard Staff Tools " 
              expanded={false}
              buttons={staffPortalButtons.standardStaffTools}
            />
            <BlueSection 
              title="Administrative Tools" 
              expanded={false}
              buttons={staffPortalButtons.administrativeTools}
            />
            <BlueSection 
              title="Teacher Tools" 
              expanded={false}
              buttons={staffPortalButtons.teacherTools}
            />
            <BlueSection 
              title="Classroom Tools" 
              expanded={false}
              buttons={staffPortalButtons.classroomTools}
            />
            <BlueSection 
              title="Learning Tools" 
              expanded={false}
              buttons={staffPortalButtons.learningTools}
            />
            <BlueSection 
              title="Digital Textbooks" 
              expanded={false}
              buttons={staffPortalButtons.digitalTextbooks}
            />
            {/* needs right buttons! */}
             <BlueSection 
              title="Digital Library Resources" 
              expanded={false}
              buttons={staffPortalButtons.digitalTextbooks}
            />
             <BlueSection 
              title="School Websites" 
              expanded={false}
              buttons={staffPortalButtons.schoolWebsites}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;