import React, { useState } from 'react';
import { Camera, MapPin, FileText, CheckCircle, Upload } from 'lucide-react';
import { PropertyType, TransactionType } from '../types';

export const PostProperty: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-8 px-4 md:px-20">
      {[1, 2, 3, 4].map((s) => (
        <div key={s} className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition duration-300 ${step >= s ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
            {step > s ? <CheckCircle size={20} /> : s}
          </div>
          <span className="text-xs font-medium mt-2 text-slate-500 hidden md:block">
            {s === 1 ? 'Cơ bản' : s === 2 ? 'Vị trí' : s === 3 ? 'Thông tin' : 'Hình ảnh'}
          </span>
        </div>
      ))}
      <div className="absolute left-0 right-0 top-5 h-1 bg-slate-200 -z-0 mx-8 md:mx-24">
         <div 
           className="h-full bg-brand-600 transition-all duration-300"
           style={{ width: `${((step - 1) / 3) * 100}%` }}
         ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Đăng tin bất động sản</h1>
        <p className="text-center text-slate-500 mb-8">Tiếp cận hàng triệu khách hàng tiềm năng</p>
        
        {renderStepIndicator()}

        <div className="mt-8">
           {step === 1 && (
             <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-slate-800">Thông tin cơ bản</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="font-semibold text-slate-700">Hình thức</label>
                      <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500">
                        <option>Mua bán</option>
                        <option>Cho thuê</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="font-semibold text-slate-700">Loại bất động sản</label>
                      <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500">
                        <option>Căn hộ chung cư</option>
                        <option>Nhà phố</option>
                        <option>Đất nền</option>
                        <option>Biệt thự</option>
                      </select>
                   </div>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800">Vị trí bất động sản</h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <select className="p-3 bg-slate-50 border border-slate-200 rounded-xl"><option>TP. Hồ Chí Minh</option></select>
                        <select className="p-3 bg-slate-50 border border-slate-200 rounded-xl"><option>Quận 9</option></select>
                    </div>
                    <input type="text" placeholder="Địa chỉ chi tiết (Số nhà, tên đường...)" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                    <div className="h-48 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400">
                       <MapPin size={32} className="mr-2" /> Chọn trên bản đồ
                    </div>
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800">Chi tiết & Giá</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Tiêu đề tin đăng (VD: Căn hộ Vinhomes view đẹp...)" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold" />
                    <textarea placeholder="Mô tả chi tiết về bất động sản của bạn..." rows={5} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"></textarea>
                    <div className="grid grid-cols-3 gap-4">
                        <input type="number" placeholder="Diện tích (m2)" className="p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                        <input type="number" placeholder="Phòng ngủ" className="p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                        <input type="number" placeholder="Phòng tắm" className="p-3 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Giá bán" className="w-full p-3 pl-4 pr-12 bg-slate-50 border border-slate-200 rounded-xl font-bold text-lg text-brand-700" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">VNĐ</span>
                    </div>
                </div>
             </div>
           )}

           {step === 4 && (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800">Hình ảnh & Video</h3>
                <div className="border-2 border-dashed border-brand-300 bg-brand-50 rounded-2xl p-10 flex flex-col items-center justify-center text-brand-700 cursor-pointer hover:bg-brand-100 transition">
                   <Upload size={48} className="mb-4" />
                   <span className="font-bold text-lg">Tải ảnh lên</span>
                   <span className="text-sm text-brand-600/70 mt-2">Kéo thả hoặc nhấn để chọn (Tối đa 10 ảnh)</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="aspect-square bg-slate-200 rounded-xl animate-pulse"></div>
                    <div className="aspect-square bg-slate-200 rounded-xl animate-pulse"></div>
                </div>
             </div>
           )}

           <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
              <button 
                 onClick={() => setStep(Math.max(1, step - 1))}
                 className={`px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              >
                 Quay lại
              </button>
              <button 
                 onClick={() => step < 4 ? setStep(step + 1) : alert('Đăng tin thành công!')}
                 className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-brand-500/30 transition flex items-center gap-2"
              >
                 {step === 4 ? 'Đăng tin ngay' : 'Tiếp tục'}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};