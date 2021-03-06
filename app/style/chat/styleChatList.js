import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleChatList = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:'#eff1f0',
  },
  itemWrap:{
    flexDirection: 'row',
    paddingTop:15,
    paddingBottom:15,
    borderBottomColor:'#d1d3d2',
    borderBottomWidth:1
  },
  profileWrap:{
  },
  msgCountWrap:{
    width:20,
    height:20,
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#f54d33',
    position:'absolute',
    right:-10,
    top:-10
  },
  msgCount:{
    color:'#fff',
    fontSize:12,
  },
  profile:{
    width:60,
    height:60,
    borderRadius:5,
  },
  itemInfo:{
    flex:1,
    marginLeft:20
  },
  baseInfo:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  distance:{
    color:'#c9c9c9',
    fontSize:14
  },
  profileName:{
    color:'#333',
    fontSize:16,
    marginBottom:6
  },
  sign:{
    fontSize:14,
    color:'#979797',
    marginTop:6
  },
  labelWrap:{
    flexDirection: 'row',
  },
  labelText:{
    color:'#fff',
    fontSize:13,
    paddingTop:2,
    paddingBottom:3,
    paddingLeft:8,
    paddingRight:8,
    borderRadius:12,
    backgroundColor:'#8bd5a4',
    marginRight:10,
    marginTop:6
  }
});

export default styleChatList;
