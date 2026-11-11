import {
  Bike,
  CircleDot,
  Dumbbell,
  Footprints,
  Mountain,
  PersonStanding,
  StretchHorizontal,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";

// Ganti URL placeholder di bawah sebelum website dipublikasikan.
// Nilai dari environment memudahkan pengujian lokal tanpa mengubah fallback produksi.
export const APP_LINKS = {
  web: import.meta.env.VITE_WEB_APP_URL?.trim() || "[URL_WEB_APP]",
  apk: import.meta.env.VITE_APK_URL?.trim() || "[URL_APK]",
} as const;

// Ubah ke true setelah file APK siap dibagikan.
export const APK_AVAILABLE = false;

export const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Olahraga", href: "#olahraga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Teknologi", href: "#teknologi" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Sport = {
  name: string;
  icon: LucideIcon;
  accent: string;
  term: string;
  unit: string;
  description: string;
};

export const SPORTS: Sport[] = [
  {
    name: "Lari",
    icon: Footprints,
    accent: "#b6f240",
    term: "Pace",
    unit: "/km",
    description: "Menit per kilometer. Tempo lari tercatat konsisten di setiap rute.",
  },
  {
    name: "Jalan kaki",
    icon: PersonStanding,
    accent: "#f2c14e",
    term: "Pace",
    unit: "/km",
    description: "Menit per kilometer. Lihat ritme jalanmu dari langkah pertama.",
  },
  {
    name: "Hiking",
    icon: Mountain,
    accent: "#ff9a62",
    term: "Pace",
    unit: "/km",
    description: "Menit per kilometer. Ukur tempo perjalanan di jalur yang menantang.",
  },
  {
    name: "Sepeda",
    icon: Bike,
    accent: "#52c7b8",
    term: "Avg speed",
    unit: "km/j",
    description: "Rata-rata kilometer per jam. Gambaran laju bersepedamu.",
  },
  {
    name: "Renang",
    icon: Waves,
    accent: "#66b6ff",
    term: "Pace per 100 meter",
    unit: "/100m",
    description: "Waktu tempuh tiap 100 meter. Bukan pace per kilometer.",
  },
  {
    name: "Futsal",
    icon: CircleDot,
    accent: "#ff8ea8",
    term: "Kecepatan",
    unit: "km/j",
    description: "Laju permainan dalam kilometer per jam.",
  },
  {
    name: "Gym",
    icon: Dumbbell,
    accent: "#9a8cff",
    term: "Tempo",
    unit: "irama repetisi",
    description: "Ritme hitungan gerakan. Fokus pada kualitas, bukan jarak.",
  },
  {
    name: "Yoga",
    icon: StretchHorizontal,
    accent: "#c0b4ff",
    term: "Flow",
    unit: "ritme perpindahan pose",
    description: "Ritme perpindahan dari satu pose ke pose berikutnya.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Masuk & pilih olahraga",
    description: "Buat akun atau masuk, lalu pilih dari lari, sepeda, jalan kaki, hiking, renang, gym, futsal, atau yoga.",
    icon: CircleDot,
    accent: "#b6f240",
  },
  {
    step: "02",
    title: "Rekam aktivitas",
    description: "Aktifkan GPS real-time saat bergerak. Tanpa GPS? Gunakan mode demo 10× atau input manual.",
    icon: Wind,
    accent: "#52c7b8",
  },
  {
    step: "03",
    title: "Simpan ke akun",
    description: "Aktivitas masuk ke riwayat, tersimpan di database PostgreSQL, dan sinkron dengan profilmu.",
    icon: Footprints,
    accent: "#ff9a62",
  },
  {
    step: "04",
    title: "Pantau progres",
    description: "Buka Beranda untuk durasi, jarak, metrik sesuai olahraga, kalori, peta rute, rekor pribadi, dan target mingguan.",
    icon: Mountain,
    accent: "#66b6ff",
  },
];

export const FAQS = [
  {
    question: "Apakah Gerakin gratis?",
    answer:
      "Versi web Gerakin tersedia untuk dicoba langsung. Rincian biaya dan paket belum diumumkan di halaman ini; jika ada pembaruan, informasinya akan ditampilkan melalui kanal resmi Gerakin.",
  },
  {
    question: "Apakah harus membuat akun?",
    answer:
      "Ya. Buat akun dengan email dan kata sandi untuk masuk ke Beranda, menyimpan aktivitas, mengikuti tantangan, dan menyinkronkan profil. Sesi login ditangani dengan cookie HttpOnly.",
  },
  {
    question: "Apakah butuh GPS?",
    answer:
      "GPS dipakai untuk lari, sepeda, jalan kaki, dan hiking agar rute terekam real-time. Tapi kamu tidak selalu membutuhkannya: ada mode demo 10× untuk mencoba alur tanpa GPS, serta input aktivitas manual untuk gym, renang, futsal, yoga, atau sesi tanpa GPS.",
  },
  {
    question: "Apakah bisa dipakai untuk gym?",
    answer:
      "Bisa. Catat sesi gym lewat input manual. Gerakin memakai istilah Tempo untuk irama repetisi, jadi fokus pencatatannya sesuai dengan latihanmu.",
  },
  {
    question: "Di mana data disimpan?",
    answer:
      "Aktivitas, kudos, komentar, klub, tantangan, dan profil pengguna disimpan di database PostgreSQL. Data kemudian disinkronkan dengan akun pengguna, sehingga riwayat tetap terhubung.",
  },
  {
    question: "Kapan APK tersedia?",
    answer:
      "APK masih dalam tahap persiapan. Sementara itu, kamu bisa menggunakan web app untuk mencoba Gerakin. Tombol unduh akan diaktifkan saat APK siap dirilis.",
  },
  {
    question: "Bisakah mencoba tanpa GPS?",
    answer:
      "Tentu. Mode demo 10× mempercepat simulasi aktivitas tanpa GPS, dan input manual tersedia untuk sesi yang tidak memerlukan pelacakan rute.",
  },
] as const;

export const FOOTER_ITEMS = {
  produk: [
    { label: "Fitur", href: "#fitur" },
    { label: "Olahraga", href: "#olahraga" },
    { label: "Cara kerja", href: "#cara-kerja" },
    { label: "Web App vs APK", href: "#akses" },
  ],
  lainnya: [
    { label: "Tentang Gerakin", href: "#tentang" },
    { label: "Teknologi", href: "#teknologi" },
    { label: "FAQ", href: "#faq" },
    { label: "Kembali ke atas", href: "#atas" },
  ],
} as const;

// Ganti URL placeholder media sosial dengan tautan akun resmi Gerakin.
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "[URL_INSTAGRAM]" },
  { label: "TikTok", href: "[URL_TIKTOK]" },
  { label: "YouTube", href: "[URL_YOUTUBE]" },
] as const;
