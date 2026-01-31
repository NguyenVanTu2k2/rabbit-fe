import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { DetailPage } from './pages/DetailPage';
import { Explore } from './pages/Explore';
import { PostProperty } from './pages/PostProperty';
import { useStore } from './store/useStore';
import Login from './components/Login';

// Simple placeholder components for other routes
const Search = () => (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tìm kiếm bất động sản</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Reusing existing logic but would be a filterable list */}
          <div className="bg-white p-10 rounded-xl shadow text-center text-slate-500">
             Chức năng tìm kiếm nâng cao đang cập nhật...
          </div>
      </div>
    </div>
);

const Projects = () => (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dự án bất động sản</h1>
      <div className="bg-white p-10 rounded-xl shadow text-center text-slate-500">
          Danh sách dự án đang cập nhật...
      </div>
    </div>
);

const Profile = () => {
    const { user, login } = useStore();
    if (!user) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-xl font-bold mb-4">Vui lòng đăng nhập</h2>
            <button onClick={login} className="bg-brand-600 text-white px-6 py-2 rounded-xl">Đăng nhập ngay</button>
        </div>
    );
    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-center gap-6 mb-6">
                <img src={user.avatar} className="w-24 h-24 rounded-full border-4 border-brand-50" />
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                    <span className="text-slate-500">Thành viên Bạc</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-lg mb-2">Tin đã lưu</h3>
                    <div className="text-3xl font-bold text-brand-600">{user.savedProperties.length}</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-lg mb-2">Số dư ví</h3>
                    <div className="text-3xl font-bold text-accent-500">0 đ</div>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/property/:id" element={<DetailPage />} />
          <Route path="/post" element={<PostProperty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<div className="p-8 text-center">Chat System Placeholder</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;