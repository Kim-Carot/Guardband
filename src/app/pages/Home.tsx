import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Phone, Droplet, AlertTriangle, Heart, Pill, Stethoscope, Shield, ChevronRight } from 'lucide-react';

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleEmergencyContactClick = () => {
    navigate('/emergency-contacts');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0">
      <div className="w-full max-w-[420px] h-screen bg-white overflow-y-auto">
        {/* Header - 10% */}
        <div 
          className={`bg-[#4169E1] px-6 py-6 flex items-center gap-4 transition-all duration-700 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ height: '10vh', minHeight: '70px' }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <User className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h1 className="text-white font-bold text-lg leading-tight mb-0.5">Nguyễn Thị Hoa</h1>
            <p className="text-white/90 text-sm">78 tuổi · Nữ</p>
          </div>
        </div>

        {/* Body - 90% */}
        <div className="px-5 py-5 space-y-4">
          {/* Emergency Contact Box - RED - Navigate to page */}
          <button 
            onClick={handleEmergencyContactClick}
            className={`w-full bg-[#DC2626] rounded-2xl p-5 text-left transition-all duration-700 delay-100 hover:bg-[#B91C1C] active:scale-98 flex items-center justify-between ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)' }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
                <p className="text-white font-bold text-base">Liên hệ khẩn cấp</p>
              </div>
              <p className="text-white font-semibold text-base mb-2">Yến Khanh
                (con gái)</p>
              <p className="text-white font-bold text-xl">0975466684</p>
            </div>
            <ChevronRight className="w-6 h-6 text-white/80 flex-shrink-0 ml-3" strokeWidth={2.5} />
          </button>

          {/* Blood Type */}
          <div 
            className={`bg-[#F5F5F5] rounded-2xl p-5 transition-all duration-700 delay-200 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-[#E74C3C]" strokeWidth={2.5} />
                <h2 className="text-gray-700 font-bold text-base">Nhóm Máu</h2>
              </div>
              <div className="bg-[#FFE8E8] px-5 py-2 rounded-xl">
                <span className="text-[#E74C3C] font-bold text-xl">O+</span>
              </div>
            </div>
          </div>

          {/* Allergies */}
          <div 
            className={`bg-[#FFF8E1] rounded-2xl p-5 transition-all duration-700 delay-300 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-[#F39C12]" strokeWidth={2.5} />
              <h2 className="text-[#F39C12] font-bold text-base">Dị Ứng</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FFF3E0] px-4 py-2 rounded-xl text-[#8B5E3C] font-semibold text-sm border border-[#FFE0B2]">
                Penicillin
              </span>
              <span className="bg-[#FFF3E0] px-4 py-2 rounded-xl text-[#8B5E3C] font-semibold text-sm border border-[#FFE0B2]">
                Shellfish
              </span>
            </div>
          </div>

          {/* Medical Conditions */}
          <div 
            className={`bg-[#E8F4FD] rounded-2xl p-5 transition-all duration-700 delay-[400ms] ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-[#3498DB]" strokeWidth={2.5} />
              <h2 className="text-[#3498DB] font-bold text-base">Bệnh Lý</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">Tiểu Đường Type 2, Huyết Áp Cao</p>
          </div>

          {/* Current Medications */}
          <div 
            className={`bg-[#F3F4F6] rounded-2xl p-5 transition-all duration-700 delay-[500ms] ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Pill className="w-5 h-5 text-[#8B5CF6]" strokeWidth={2.5} />
              <h2 className="text-gray-900 font-bold text-base">Thuốc Đang Dùng</h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">Metformin 500mg, Lisinopril 10mg</p>
          </div>

          {/* Primary Doctor */}
          <div 
            className={`bg-[#F3F4F6] rounded-2xl p-5 transition-all duration-700 delay-[600ms] ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Stethoscope className="w-5 h-5 text-[#3498DB]" strokeWidth={2.5} />
              <h2 className="text-gray-900 font-bold text-base">Bác Sĩ Chính</h2>
            </div>
            <p className="text-gray-900 font-semibold text-base">BS. Nguyễn Minh Tuấn</p>
          </div>

          {/* Footer */}
          <div 
            className={`text-center py-6 transition-all duration-700 delay-[700ms] ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" strokeWidth={2} />
              <span>Được bảo vệ bởi GuardBand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
