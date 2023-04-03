import Layout from '@/components/common/Layouts';
import BottomSheet from '@/components/common/BottomSheet';
import ChatProfileImg from '@/components/chatroom/ChatProfileImg';
import { SafeAreaView } from 'react-native-safe-area-context';

function PlaygroundScreen() {
  return (
    <SafeAreaView>
      <Layout>
        <BottomSheet />
        <ChatProfileImg src="https://images.unsplash.com/photo-1675066096766-d4f56aa0674d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </Layout>
    </SafeAreaView>
  );
}

export default PlaygroundScreen;
