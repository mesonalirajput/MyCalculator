import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const oprators = ['+', '-', '*', '/', '%'];

const MainScreen = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const _addToInput = val => {
    let newInput = input;
    let end = newInput ? newInput[newInput.length - 1] : 0;

    if (end) {
      if (oprators.includes(end) && oprators.includes(val)) {
        newInput = newInput.slice(0, -1);
      }
    }
    newInput += val;

    setInput(newInput);
  };
  const _backSpace = () => {
    let newInput = input;
    newInput = newInput.slice(0, -1);
    setInput(newInput);
    _calc();
  };
  const _addMinus = () => {
    let newInput = input;
    if (newInput[0] === '-') {
      newInput = newInput.substring(1);
      newInput = `+${newInput}`;
    } else if (newInput[0] === '+') {
      newInput = newInput.substring(1);
      newInput = `-${newInput}`;
    } else {
      newInput = `-${newInput}`;
    }

    setInput(newInput);
  };
  const _clear = () => {
    setInput('');
    setResult('');
  };
  const _calc = () => {
    let newInput = input;
    let end = newInput ? newInput[newInput.length - 1] : 0;
    if (!oprators.includes(end)) {
      let nResult = eval(newInput);
      setResult(nResult);
    }
  };
  return (
    <View style={styles.mainScreen__container}>
      <View style={styles.calculationArea}>
        <Text style={{fontSize: 60, fontWeight: '500', color: '#1ad1ff'}}>
          {input}
        </Text>
        <Text style={{fontSize: 40}}>{result}</Text>
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.buttonArea__box}>
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'AC'}
            style={{flex: 1}}
            _onPress={_clear}
          />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'<--'}
            style={{flex: 1}}
            _onPress={_backSpace}
          />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'+/-'}
            style={{flex: 1}}
            _onPress={_addMinus}
          />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'/'}
            style={{flex: 1}}
            _onPress={_addToInput}
          />
        </View>
        <View style={styles.buttonArea__box}>
          <CalBtn title={'7'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'8'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'9'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'*'}
            style={{flex: 1}}
            _onPress={_addToInput}
          />
        </View>
        <View style={styles.buttonArea__box}>
          <CalBtn title={'4'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'5'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'6'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'-'}
            style={{flex: 1}}
            _onPress={_addToInput}
          />
        </View>
        <View style={styles.buttonArea__box}>
          <CalBtn title={'1'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'2'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'3'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn
            color={'#4d4d4d'}
            tcolor={'#1ad1ff'}
            title={'+'}
            style={{flex: 1}}
            _onPress={_addToInput}
          />
        </View>
        <View style={styles.buttonArea__box}>
          <CalBtn title={'%'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'0'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn title={'.'} style={{flex: 1}} _onPress={_addToInput} />
          <CalBtn
            color={'#00a3cc'}
            title={'='}
            style={{flex: 1}}
            _onPress={_calc}
          />
        </View>
      </View>
    </View>
  );
};

function CalBtn(props) {
  let {_onPress, title, color, tcolor} = props;
  return (
    <TouchableOpacity
      style={{
        ...props.style,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => _onPress(title)}>
      <Text
        style={{
          color: tcolor || '#fff',
          fontSize: 25,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  mainScreen__container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  calculationArea: {
    display: 'flex',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: '#4d4d4d',
  },
  buttonArea: {
    display: 'flex',
    flex: 4,
  },
  buttonArea__box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});

export default MainScreen;
