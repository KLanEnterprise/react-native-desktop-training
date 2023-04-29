import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import commonColor from './constants/theme';
import dummyData from './components/dummyData';

const Index = () => {
  console.log(
    'OS platform: ',
    Platform.OS,
    'Theme: ',
    useColorScheme(),
    'commonColor: ',
    commonColor,
  );
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          //   backgroundColor: 'white',
          width: '100%',
          height: 60,
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>ProDeel</Text>
        <View
          style={{
            backgroundColor: '#dedede',
            width: 200,
            borderRadius: 30,
            height: 30,
            justifyContent: 'center',
            paddingHorizontal: 12,
          }}>
          <Text style={{color: 'grey', fontSize: 12}}>Search</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          //   backgroundColor: 'white',
          //   borderRadius: 10,
        }}>
        <View
          style={{
            padding: 12,
            // backgroundColor: 'red',
            flex: 0.15,
            height: '100%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'black',
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>A</Text>
            </View>
            <View style={{}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
                Fillo Team
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                hello@gmail.com
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: 'grey',
                fontSize: 12,
                marginVertical: 12,
                fontWeight: 'bold',
              }}>
              Menu
            </Text>
            <FlatList
              data={dummyData.menu}
              key={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                      padding: 7,
                      backgroundColor:
                        index === 1 ? '#8aadf771' : 'transparent',
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('./assets/home.png')}
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        tintColor: index === 1 ? '#058be4ff' : 'grey',
                      }}
                    />
                    <Text style={{color: index === 1 ? '#058be4ff' : 'grey'}}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#dedede',
            flex: 0.85,
            height: '100%',
            padding: 12,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Compliance Document
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              marginTop: 12,
              padding: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                // borderColor: '#dedede',
                // backgroundColor:'red',
                // paddingVertical: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 200,
                  justifyContent: 'space-between',
                  //   height:50
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#058be4ff',
                    borderBottomWidth: 2,
                    borderColor: '#058be4ff',
                  }}>
                  All
                </Text>
                <Text style={{color: 'grey'}}>Active</Text>
                <Text style={{color: 'grey'}}>Completed</Text>
                <Text style={{color: 'grey'}}>Apps</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#dedede',
                  width: 200,
                  borderRadius: 30,
                  height: 30,
                  justifyContent: 'center',
                  paddingHorizontal: 12,
                }}>
                <Text style={{color: 'grey', fontSize: 12}}>Search</Text>
              </View>
            </View>
            <Text style={{color: 'grey', marginVertical: 12}}>
              20 documents
            </Text>
            <View
              style={{
                // paddingBottom: 80,
                borderWidth: 1,
                borderColor: '#dedede',
                borderTopLeftRadius: 10,
                borderTopEndRadius: 10,
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  justifyContent: 'space-between',
                  backgroundColor: '#dedede',
                  paddingHorizontal: 12,
                }}>
                <Text style={{color: 'grey', fontWeight: 'bold'}}>Name</Text>
                <Text style={{color: 'grey', fontWeight: 'bold'}}>Compte</Text>
                <Text style={{color: 'grey', fontWeight: 'bold'}}>Type</Text>
                <Text style={{color: 'grey', fontWeight: 'bold'}}>Status</Text>
              </View>
              <FlatList
                // style={{marginBottom: 60}}
                data={dummyData.comptes}
                renderItem={({item}) => {
                  return (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginVertical: 10,
                          justifyContent: 'space-between',
                          paddingHorizontal: 12,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                            // justifyContent:'space-between'
                          }}>
                          {/* <Image
                            source={require('./assets/home.png')}
                            style={{width: 15, height: 15, marginRight: 5}}
                          /> */}
                          <Text style={{color: 'black'}}>{item.name}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                            // justifyContent:'space-between'
                          }}>
                          {/* <Image
                            source={require('./assets/home.png')}
                            style={{width: 15, height: 15, marginRight: 5}}
                          /> */}
                          <Text style={{color: 'black'}}>{item.numCompte}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                            // justifyContent:'space-between'
                          }}>
                          {/* <Image
                            source={require('./assets/home.png')}
                            style={{width: 15, height: 15, marginRight: 5}}
                          /> */}
                          <Text style={{color: 'black'}}>{item.type}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                            // justifyContent:'space-between'
                          }}>
                          {/* <Image
                            source={require('./assets/home.png')}
                            style={{width: 15, height: 15, marginRight: 5}}
                          /> */}
                          <Text style={{color: 'black'}}>{item.status}</Text>
                        </View>
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
