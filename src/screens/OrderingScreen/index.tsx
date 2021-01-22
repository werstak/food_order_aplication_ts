import React, { ReactElement, useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Card, CardItem, Container, Content, Left, ListItem, Radio, Right, Tab, Tabs } from 'native-base';
import FooterTabsBadge from '../../components/FooterTabsBadge';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import Tab1 from '../../components/TabsDelivery/TabDeliveryOne';
import Tab2 from '../../components/TabsDelivery/TabDeliveryTwo';

const OrderingScreen = (): ReactElement => {

  const [date, setDate] = useState(new Date());
  // const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  console.log('date', date);
  let day: any = date.getDate();
  if (day < 10) day = '0' + day;
  let month: any = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let year: any = date.getFullYear() % 100;
  if (year < 10) year = '0' + year;

  let hours = date.getHours();
  let min: any = date.getMinutes();
  if (min < 10) min = '0' + min;

  return (
    <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem>
            <View>
              <Text style={styles.title}>Order details</Text>
              <View style={styles.DateTimePicker}>
                <View>
                  <Button onPress={showDatepicker} title="Show date picker!"/>
                </View>
                <Text>{day}.{month}.{year}</Text>
                <View>
                  <Button onPress={showTimepicker} title="Show time picker!"/>
                </View>
                <Text>{hours}:{min}</Text>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <View style={styles.deliveryWrap}>
              <Text style={styles.title}>Delivery method:</Text>
              <Tabs style={styles.tabsWrap}>
                <Tab heading="Delivery">
                  <Tab1/>
                </Tab>
                <Tab heading="Self export">
                  <Tab2/>
                </Tab>
              </Tabs>
            </View>
          </CardItem>
        </Card>
        <Card>
          <View>

            <Text style={styles.title}>Payment method:</Text>

            {/*<ListItem selected={false} >*/}
            {/*  <Left>*/}
            {/*    <Text>Lunch Break</Text>*/}
            {/*  </Left>*/}
            {/*  <Right>*/}
            {/*    <Radio*/}
            {/*      color={"#f0ad4e"}*/}
            {/*      selectedColor={"#5cb85c"}*/}
            {/*      selected={false}*/}
            {/*    />*/}
            {/*  </Right>*/}
            {/*</ListItem>*/}
            {/*<ListItem selected={true}>*/}
            {/*  <Left>*/}
            {/*    <Text>Discussion with Client</Text>*/}
            {/*  </Left>*/}
            {/*  <Right>*/}
            {/*    <Radio*/}
            {/*      color={"#f0ad4e"}*/}
            {/*      selectedColor={"#5cb85c"}*/}
            {/*      selected={true}*/}
            {/*    />*/}
            {/*  </Right>*/}
            {/*</ListItem>*/}

            <ListItem>
              <Left>
                <Text>Daily Stand Up</Text>
              </Left>
              <Right>
                <Radio selected={false}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Discussion with Client</Text>
              </Left>
              <Right>
                <Radio selected={true}/>
              </Right>
            </ListItem>

          </View>
        </Card>

      </Content>
      <FooterTabsBadge/>
    </Container>

  );
};

export default OrderingScreen;
