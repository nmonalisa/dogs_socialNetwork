import {Route, Routes} from 'react-router-dom';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import UserPost from './UserPost';
import Feed from '../Feed/Feed';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="/post" element={<UserPost />} />
      </Routes>
    </section>
  );
};

export default User;
