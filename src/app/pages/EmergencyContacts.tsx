import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Phone, Mail, MapPin, User } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  address?: string;
  avatar: string;
}

export default function EmergencyContacts() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Hoàng Phương Thảo',
      relationship: 'Con gái',
      phone: '09839986768',
      email: 'hoangphuongthao2903@email.com',
      address: 'Quận 7, TP. HCM',
      avatar: 'T'
    },
    {
      id: 2,
      name: 'Nguyễn Thy Huyền Trân',
      relationship: 'Con dâu',
      phone: '0785015678',
      email: 'tn06092006@gmail.com',
      address: 'Quận 3, TP. HCM',
      avatar: 'TN'
    },
    {
      id: 3,
      name: 'Trần Nữ Thúy Ngân',
      relationship: 'Chị gái',
      phone: '0834416703',
      email: 'trnthuyngan.2006@gmail.com',
      address: 'Quận 1, TP. HCM',
      avatar: 'N'
    },
    {
      id: 4,
      name: 'Phạm Ánh Tuyết',
      relationship: 'Bác sĩ chính',
      phone: '0702 545 926',
      email: 'tuyetdu2006@gmail.com',
      address: 'Bệnh viện Đa khoa',
      avatar: 'AT'
    }
  ];

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0">
      <div className="w-full max-w-[420px] h-screen bg-white overflow-y-auto">
        {/* Header - 10% */}
        <div 
          className={`bg-[#DC2626] px-6 py-6 flex items-center gap-4 transition-all duration-700 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ height: '10vh', minHeight: '70px' }}
        >
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-white font-bold text-lg leading-tight">Liên Hệ Khẩn Cấp</h1>
            <p className="text-white/90 text-sm">{contacts.length} người liên hệ</p>
          </div>
        </div>

        {/* Body - Contact List */}
        <div className="divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className={`px-6 py-5 bg-white hover:bg-gray-50 transition-all duration-500 ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Contact Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DC2626] to-[#B91C1C] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-xl">{contact.avatar}</span>
                </div>
                
                {/* Contact Info */}
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold text-lg mb-0.5">{contact.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{contact.relationship}</p>
                  
                  {/* Phone */}
                  <button
                    onClick={() => handleCall(contact.phone)}
                    className="flex items-center gap-2 mb-2 hover:bg-blue-50 rounded-lg px-2 py-1 -ml-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#4169E1]" strokeWidth={2} />
                    <span className="text-[#4169E1] font-semibold text-base">{contact.phone}</span>
                  </button>
                  
                  {/* Email */}
                  {contact.email && (
                    <div className="flex items-center gap-2 mb-2 px-2 py-1">
                      <Mail className="w-4 h-4 text-gray-400" strokeWidth={2} />
                      <span className="text-gray-600 text-sm">{contact.email}</span>
                    </div>
                  )}
                  
                  {/* Address */}
                  {contact.address && (
                    <div className="flex items-center gap-2 px-2 py-1">
                      <MapPin className="w-4 h-4 text-gray-400" strokeWidth={2} />
                      <span className="text-gray-600 text-sm">{contact.address}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleCall(contact.phone)}
                  className="flex-1 bg-[#DC2626] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#B91C1C] transition-colors shadow-sm"
                >
                  Gọi Ngay
                </button>
                <button
                  onClick={() => window.location.href = `sms:${contact.phone}`}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors"
                >
                  Nhắn Tin
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Padding */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}
