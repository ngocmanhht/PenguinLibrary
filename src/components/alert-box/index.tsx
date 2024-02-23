import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import UIStore from '../../stores/ui';
import useStores from '../../hooks/use-stores';
import { observer } from 'mobx-react';
import { Icons } from '../../assets/icons/const';
import { FontSizes } from '../../assets/styles/typography';

const AlertBox = observer(() => {
  const uiStore: UIStore = useStores().uiStore;

  const { isVisible, msg } = uiStore.alertBox;

  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop
      onDismiss={() => uiStore.hideAlertBox()}
    >
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: 'flex-end' }}
          onPress={() => uiStore.hideAlertBox()}
        >
          <Image
            source={Icons.Close}
            style={{
              width: 20,
              height: undefined,
              aspectRatio: 1,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: FontSizes.xl,
            }}
          >
            Thông báo!
          </Text>
          <Text
            style={{
              fontSize: FontSizes.lg,
              textAlign: 'center',
            }}
          >
            {msg}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => uiStore.hideAlertBox()}
            style={[styles.btn]}
          >
            <Text style={[styles.txt, { color: '#079DDA' }]}>Hủy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#079DDA' }]}
          >
            <Text style={styles.txt}>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default AlertBox;

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FontSizes.lg,
  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#079DDA',
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
