/**
 * @format
 */
 import {TalkingDataSDK,TalkingDataProfile,TalkingDataProfileType,TalkingDataGender,TalkingDataOrder,TalkingDataShoppingCart,TalkingDataSearch,TalkingDataTransaction} from './TalkingDataSDK.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Alert,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class RnTest extends Component {
  render() {
    return (

      <ScrollView style={styles.contentContainer}>
                 <Button
                    title={"init"}
                    onPress={
                        () => {
                          appId = '您的App ID';
                          channelId = '您的Channel ID';
                          custom = '您的自定义参数 Custom';
                          TalkingDataSDK.init(appId,channelId,custom);
                      }
                    }
                />
                <Button
                    title={"getDeviceID"}
                    onPress={
                        () => {
                          TalkingDataSDK.getDeviceID((device_id)=>{
                                Alert.alert(device_id);
                          });
                      }
                    }
                />
                <Button
                    title={"getOAID"}
                    onPress={
                        () => {
                        this.timer = setTimeout(() => {
                           TalkingDataSDK.getOAID((oaid)=>{
                                 Alert.alert(oaid);
                           });
                         },3000);
                      }
                    }
                />
                <Button
                    title={"setLocation"}
                    onPress={
                        () => {
                          lat = 30;
                          lnt = 50;
                          TalkingDataSDK.setLocation(lat,lnt);
                        }
                    }
                />
                <Button
                    title={"onEvent"}
                    onPress={
                        () => {
                          eventName = 'eventName';
                          value = 5.21; //账户昵称
                          parameters = {'btn_name':'xx_btn','btn_color':'xxcolor'};
                          TalkingDataSDK.onEvent(eventName,value,parameters);
                        }
                    }
                />
                <Button
                    title={"setGlobalKV"}
                    onPress={
                        () => {
                          globalKey = 'gkey';
                          globalValue = 'gvalue';
                          TalkingDataSDK.setGlobalKV(globalKey,globalValue);
                        }
                    }
                />
                <Button
                    title={"removeGlobalKV"}
                    onPress={
                        () => {
                          globalKey = 'gkey';
                          TalkingDataSDK.removeGlobalKV(globalKey);
                        }
                    }
                />
                <Button
                    title={"onReceiveDeepLink"}
                    onPress={
                        () => {
                          link = 'https://www.talkingdata.com';
                          TalkingDataSDK.onReceiveDeepLink(link);
                        }
                    }
                />
                <Button
                    title={"onRegister"}
                    onPress={
                        () => {
                          profileId = 'profile';
                          profile = new TalkingDataProfile();
                          profile.setName('test1');
                          profile.setType(TalkingDataProfileType.ANONYMOUS);
                          invitationCode = "12345";
                          TalkingDataSDK.onRegister(profileId,profile.profileString,invitationCode);
                        }
                    }
                />
                <Button
                    title={"onLogin"}
                    onPress={
                        () => {
                          profileId = 'profile';
                          profile = new TalkingDataProfile();
                          profile.setName('test2');
                          profile.setType(TalkingDataProfileType.ANONYMOUS);
                          TalkingDataSDK.onLogin(profileId,profile.profileString);
                        }
                    }
                />
                <Button
                    title={"onProfileUpdate"}
                    onPress={
                        () => {
                          profile = new TalkingDataProfile();
                          profile.setName('test3');
                          profile.setType(TalkingDataProfileType.ANONYMOUS);
                          profile.setGender(TalkingDataGender.MALE);
                          profile.setAge(18);
                          profile.setProperty1('test');
                          TalkingDataSDK.onProfileUpdate(profile.profileString);
                        }
                    }
                />
                <Button
                    title={"onCreateCard"}
                    onPress={
                        () => {
                          profile = 'profile';
                          method = 'method';
                          content = 'content';
                          TalkingDataSDK.onCreateCard(profile,method,content);
                        }
                    }
                />
                <Button
                    title={"onFavorite"}
                    onPress={
                        () => {
                          category = 'category';
                          content = 'content';
                          TalkingDataSDK.onFavorite(category,content);
                        }
                    }
                />
                <Button
                    title={"onShare"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onShare(profile,content);
                        }
                    }
                />
                <Button
                    title={"onPunch"}
                    onPress={
                        () => {
                          profile = 'profile';
                          punchId = 'punchId';
                          TalkingDataSDK.onPunch(profile,punchId);
                        }
                    }
                />
                <Button
                    title={"onSearch"}
                    onPress={
                        () => {
                          s = new TalkingDataSearch();
                          s.category = 'category';
                          s.content = 'content';
                          s.destination = 'destination';
                          s.origin = 'origin';
                          s.item_id = 'item_id';
                          s.item_location_id = 'item_location_id';
                          s.start_date = '1122334455';
                          s.end_date = '6677889900';
                          TalkingDataSDK.onSearch(s.adSearchString);
                        }
                    }
                />
                <Button
                    title={"onContact"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onContact(profile,content);
                        }
                    }
                />
                <Button
                    title={"onPay"}
                    onPress={
                        () => {
                          profile = 'profile';
                          orderId = 'order123';
                          amount = 12345;
                          currencyType = 'CNY';
                          paymentType = 'paymentType';
                          itemId = 'itemId';
                          itemCount = 123;
                          TalkingDataSDK.onPay(profile,orderId,amount,currencyType,paymentType,itemId,itemCount);
                        }
                    }
                />
                <Button
                    title={"onChargeBack"}
                    onPress={
                        () => {
                          profile = 'profile';
                          orderId = 'orderid';
                          reason = 'reason';
                          type = 'type';
                          TalkingDataSDK.onChargeBack(profile,orderId,reason,type);
                        }
                    }
                />
                <Button
                    title={"onReservation"}
                    onPress={
                        () => {
                          profile = 'profile';
                          reservationId = 'reservationId';
                          category = 'category';
                          amount = 123;
                          term = 'term';
                          TalkingDataSDK.onReservation(profile,reservationId,category,amount,term);
                        }
                    }
                />
                <Button
                    title={"onBooking"}
                    onPress={
                        () => {
                            profile = 'profile';
                            bookingId = 'bookingId';
                            category = 'category';
                            amount = 10;
                            content = 'content';
                            TalkingDataSDK.onBooking(profile,bookingId,category,amount,content);
                        }
                    }
                />
                <Button
                    title={"onViewItem"}
                    onPress={
                        () => {
                          itemId = 'itemId';
                          category = 'category';
                          name = 'name';
                          unitPrice = 10;
                          TalkingDataSDK.onViewItem(itemId,category,name,unitPrice);
                        }
                    }
                />
                <Button
                    title={"onAddItemToShoppingCart"}
                    onPress={
                        () => {
                          itemId = 'item123';
                          category = 'category';
                          name = 'name';
                          unitPrice = 123;
                          amount = 9;
                          TalkingDataSDK.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);
                        }
                    }
                />
                <Button
                    title={"onViewShoppingCart"}
                    onPress={
                        () => {
                            let talkingdataShoppingCart = new TalkingDataShoppingCart();
                            itemId = 'itemId';
                            category = 'category';
                            name = 'name';
                            unitPrice = 10;
                            amount = 2;
                            talkingdataShoppingCart.addItem(itemId,category,name,unitPrice,amount);
                            TalkingDataSDK.onViewShoppingCart(talkingdataShoppingCart.shoppingCartString);
                        }
                    }
                />
                <Button
                    title={"onPlaceOrder"}
                    onPress={
                        () => {
                          profile = 'profile';
                          order = new TalkingDataOrder('orderid', '123', 'CNY');
                          order.addItem('itemId','category','name',10,2)
                          TalkingDataSDK.onPlaceOrder(order.orderString,profile);
                        }
                    }
                />
                <Button
                    title={"onOrderPaySucc"}
                    onPress={
                        () => {
                          order = new TalkingDataOrder('orderid', '123', 'CNY');
                          paymentType = 'ApplePay';
                          profile = 'profile';
                          TalkingDataSDK.onOrderPaySucc(order.orderString,paymentType,profile);
                        }
                    }
                />
                <Button
                    title={"onCancelOrder"}
                    onPress={
                        () => {
                          order = new TalkingDataOrder('orderid', '123', 'CNY');
                          TalkingDataSDK.onCancelOrder(order.orderString);
                        }
                    }
                />
                <Button
                    title={"onCredit"}
                    onPress={
                        () => {
                          profile = 'profile';
                          amount = 10;
                          content = 'content';
                          TalkingDataSDK.onCredit(profile,amount,content);
                        }
                    }
                />
                <Button
                    title={"onTransaction"}
                    onPress={
                        () => {
                          t = new TalkingDataTransaction();
                          t.transactionId = 'transactionId';
                          t.category = 'category';
                          t.amount = '996';
                          t.personA = 'personA';
                          t.personB = 'personB';
                          t.startDate = '11223344';
                          t.endDate = '5566778899';
                          t.currencyType = 'currencyType';
                          t.content = 'content';
                          TalkingDataSDK.onTransaction('profile',t.transactionStr);
                        }
                    }
                />
                <Button
                    title={"onCreateRole"}
                    onPress={
                        () => {
                            rolename = 'rolename';
                            TalkingDataSDK.onCreateRole(rolename);
                        }
                    }
                />
                <Button
                    title={"onLevelPass"}
                    onPress={
                        () => {
                          profile = 'profile';
                          levelId = 'levelId';
                          TalkingDataSDK.onLevelPass(profile,levelId);
                        }
                    }
                />
                <Button
                    title={"onGuideFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onGuideFinished(profile,content);
                        }
                    }
                />
                <Button
                    title={"onLearn"}
                    onPress={
                        () => {
                          profile = 'profile';
                          course = 'course';
                          begin = 123;
                          duration = 3600;
                          TalkingDataSDK.onLearn(profile,course,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onPreviewFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onPreviewFinished(profile,content);

                        }
                    }
                />
                <Button
                    title={"onRead"}
                    onPress={
                        () => {
                          profile = 'profile';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataSDK.onRead(profile,book,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onFreeFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onFreeFinished(profile,content);
                        }
                    }
                />
                <Button
                    title={"onAchievementUnlock"}
                    onPress={
                        () => {
                          profile = 'profile';
                          achievementId = 'achievementId';
                          TalkingDataSDK.onAchievementUnlock(profile,achievementId);
                        }
                    }
                />
                <Button
                    title={"onBrowse"}
                    onPress={
                        () => {
                          profile = 'profile';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataSDK.onBrowse(profile,book,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onTrialFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataSDK.onTrialFinished(profile,content);
                        }
                    }
                />
                <View style={ {width:40,height:40}}/>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  contentContainer: {
      paddingTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo_talkingdata', () => RnTest);

