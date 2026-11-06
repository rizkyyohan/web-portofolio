// Semua konten portofolio ada di file ini. Ganti dengan data asli kamu.

export const profile = {
  name: "Rizky Yohan",
  role: "Web Developer",
  photo: "/profile.jpeg", // ganti dengan foto kamu, mis. /profile.jpg di folder public
  tagline:
    "Saya adalah lulusan Teknologi Informasi yang memiliki ketertarikan pada pengembangan web dan teknologi digital.",
  intro:
    "Saya senang membangun solusi digital yang fungsional, responsif, dan mudah digunakan, serta terus mengembangkan kemampuan melalui eksplorasi teknologi baru dan pengalaman praktis.",
  about: [
    "Halo! Saya Rizky Yohan Butarbutar, lulusan S1 Teknologi Informasi dari Telkom University yang memiliki ketertarikan pada bidang pengembangan front-end dan pengembangan web.",
    "Saya memiliki pengalaman magang dalam mengembangkan dan memelihara aplikasi web, mulai dari website profil perusahaan hingga platform pariwisata inklusif. Dalam salah satu proyek, saya berkontribusi pada sekitar 75% pengembangan front-end dengan membangun 10 halaman web dan 26 komponen React yang responsif dan dapat digunakan kembali.",
    "Saya terbiasa bekerja secara kolaboratif, memecahkan masalah, melakukan pengujian dan debugging, serta mengintegrasikan REST API. Saya juga memiliki kemauan belajar yang tinggi dan antusias untuk terus mengembangkan kemampuan serta mengeksplorasi teknologi baru.",
  ],
};

export const skills = [
  "Pemecahan Masalah",
  "Kerja Sama Tim",
  "Komunikasi",
  "Berpikir Kritis",
  "Adaptif",
  "Teliti",
  "Inisiatif",
  "Manajemen Waktu",
  "Desain Responsif",
  "Dasar UI/UX",
  "Kontrol Versi",
];

export const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "HTML",
  "CSS",
  "SQL",
  "C++",
];

export const software = [
  "VS Code",
  "Git & GitHub",
  "Figma",
  "Postman",
  "MySQL",
  "Node.js",
  "React",
  "PostgreSQL",
  "Laravel",
  "Bootstrap",
];

export type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  points: string[];
};

export const internships: ExperienceItem[] = [
  {
    title: "Magang Teknologi Informasi",
    place: "PT Ekacitta Dian Persada",
    period: "Agustus 2024 - Oktober 2024",
    points: [
      "Mengembangkan dan memelihara halaman website profil perusahaan yang responsif untuk berbagai perangkat.",
      "Berkolaborasi dengan tim internal untuk mengumpulkan kebutuhan dan mengimplementasikan pengembangan website.",
      "Melakukan pengujian website untuk memastikan fungsionalitas dan kompatibilitas pada berbagai perangkat.",
      "Meningkatkan tampilan antarmuka (UI) dan kemudahan penggunaan website guna memberikan pengalaman pengguna yang lebih baik.",
    ],
  },
  {
    title: "Magang Pengembangan Web",
    place: "PT Mitra Talenta Grup",
    period: "Februari 2024 - Juni 2024",
    points: [
      "Berkolaborasi dalam tim lintas fungsi beranggotakan 6 orang untuk mengembangkan Travelable, platform pariwisata inklusif bagi wisatawan berkebutuhan khusus.",
      "Berkontribusi sekitar 75% dalam pengembangan front-end dengan membangun 10 halaman web responsif dan 26 komponen React yang dapat digunakan kembali.",
      "Mengimplementasikan desain UI/UX dari Figma menjadi antarmuka web menggunakan React.js, Bootstrap 5, HTML, CSS, dan JavaScript.",
      "Menggunakan Git/GitHub dan Postman serta menerapkan kolaborasi Agile melalui rapat sprint dan tinjauan kode (code review).",
    ],
  },
];

export const organizations: ExperienceItem[] = [
  {
    title: "Ketua Divisi Hubungan Masyarakat",
    place: "Hardware and Embedded System Laboratory",
    period: "2024 - 2025",
    points: [
      "Membangun dan menjalin hubungan kerja sama dengan laboratorium atau organisasi eksternal.",
      "Berkontribusi dalam perencanaan dan koordinasi kegiatan serta workshop teknologi untuk mendukung pengembangan keterampilan dan pengetahuan anggota laboratorium.",
      "Mengumpulkan dan menyampaikan informasi kepada anggota laboratorium terkait kompetisi dan kegiatan teknologi.",
      "Melakukan riset untuk menyusun modul laboratorium serta mengembangkan perangkat berbasis embedded systems.",
    ],
  },
  {
    title: "Ketua Divisi Publikasi dan Dokumentasi",
    place: "Hardware and Embedded System Laboratory",
    period: "2023 - 2024",
    points: [
      "Bertanggung jawab sebagai admin media sosial laboratorium.",
      "Membuat dan mengelola konten untuk akun media sosial laboratorium.",
      "Berpartisipasi dalam proyek inovasi yang memanfaatkan teknologi embedded systems.",
    ],
  },
];

export type Project = {
  slug: string; // dipakai sebagai URL: /projects/<slug>
  title: string;
  description: string; // ringkasan singkat untuk card
  tags: string[];
  images: string[]; // foto pertama dipakai sebagai thumbnail card
  details: string[]; // paragraf deskripsi lengkap di halaman detail
  videoUrl?: string; // opsional: link video demonstrasi
};

export const projects: Project[] = [
  {
    slug: "task-manager-app",
    title: "Travelable — Platform Wisata Inklusif",
    description:
      "Platform berbasis web yang menyediakan layanan paket wisata dan pemesanan pemandu perjalanan pribadi, dengan fokus pada kemudahan akses bagi wisatawan penyandang disabilitas.",
    tags: ["React", "Bootstrap 5", "PostgreSQL", "Node js"],
    images: [
      "/projects/task-manager-app/Travel1.jpg",
      "/projects/task-manager-app/Travel2.jpg",
      "/projects/task-manager-app/Travel3.jpg",
      "/projects/task-manager-app/Travel4.jpg",
      "/projects/task-manager-app/Travel5.jpg",
      "/projects/task-manager-app/Travel6.jpg",
    ],
    details: [
      "Travelable merupakan platform pariwisata inklusif yang dikembangkan untuk mempermudah pengguna dalam mencari destinasi wisata, memilih paket perjalanan, serta memesan layanan pemandu pribadi, khususnya bagi wisatawan penyandang disabilitas.",
      "Platform ini menyediakan berbagai fitur, mulai dari registrasi dan login pengguna, pencarian destinasi wisata, pemilihan paket perjalanan, pemesanan pemandu wisata, proses pembayaran, hingga pengelolaan profil pengguna.",
      "Dalam pengembangannya, saya berkontribusi sekitar 75% pada bagian front-end dengan membangun 10 halaman web responsif dan 26 komponen React yang dapat digunakan kembali. Proyek ini dikembangkan secara kolaboratif dalam tim yang terdiri dari enam anggota dengan menggunakan React.js, Bootstrap 5, Node.js, dan MySQL.",
    ],
  },
  {
    slug: "ecommerce-dashboard",
    title: "Jadwal Ruang Rapat — Sistem Manajemen Rapat",
    description:
      "Aplikasi berbasis web untuk menampilkan jadwal penggunaan ruang rapat, dilengkapi sistem presensi berbasis QR Code dan pemantauan kehadiran peserta secara real-time.",
    tags: ["PHP", "Laravel", "MySQL"],
    images: [
      "/projects/ecommerce-dashboard/Meetroom1.jpg",
      "/projects/ecommerce-dashboard/Meetroom2.jpg",
      "/projects/ecommerce-dashboard/Meetroom3.jpg",
    ],
    details: [
      "Jadwal Ruang Rapat merupakan aplikasi web yang dirancang untuk mempermudah pengelolaan dan pemantauan jadwal penggunaan ruang rapat di lingkungan perusahaan.",
      "Aplikasi ini menampilkan informasi jadwal rapat pada setiap ruangan, meliputi nama ruangan, waktu pelaksanaan, nama pemesan, topik rapat, narasumber, dan status berlangsungnya kegiatan.",
      "Salah satu fitur utamanya adalah sistem presensi berbasis QR Code. Peserta dapat memindai QR Code yang tersedia pada jadwal rapat untuk mengakses formulir kehadiran. Data presensi yang telah dikirimkan kemudian diperbarui secara real-time sehingga daftar peserta yang hadir dapat dipantau secara langsung.",
      "Selain itu, aplikasi menyediakan navigasi jadwal berdasarkan hari sebelumnya, hari ini, dan hari berikutnya untuk mempermudah pengguna dalam melihat agenda rapat.",
    ],
  },
  {
    slug: "weather-forecast",
    title: "Tempat Sampah Pintar — Sistem Pemilah Sampah Otomatis",
    description:
      "Prototipe tempat sampah pintar berbasis Arduino yang memanfaatkan sensor untuk mendeteksi dan memisahkan sampah organik dan nonorganik secara otomatis.",
    tags: ["C", "C++", "Arduino IDE"],
    images: [
      "/projects/weather-forecast/arduino1.jpeg",
      "/projects/weather-forecast/arduino2.jpeg",
      "/projects/weather-forecast/arduino3.jpeg",
    ],
    details: [
      "Tempat Sampah Pintar merupakan proyek embedded system yang dikembangkan untuk membantu proses pemilahan sampah berdasarkan jenisnya secara otomatis.",
      "Sistem ini menggunakan mikrokontroler Arduino yang terintegrasi dengan sensor untuk mendeteksi dan mengidentifikasi kategori sampah organik maupun nonorganik.",
      "Ketika sampah dimasukkan, sensor akan melakukan pembacaan dan mengirimkan informasi ke mikrokontroler untuk diproses. Berdasarkan hasil deteksi tersebut, sistem mengaktifkan mekanisme pemilahan sehingga sampah dapat diarahkan ke tempat penampungan sesuai kategorinya.",
      "Proyek ini menggabungkan konsep pemrograman mikrokontroler, integrasi sensor, dan otomasi perangkat keras sebagai penerapan teknologi embedded system dalam pengelolaan sampah.",
    ],
    videoUrl:
      "https://drive.google.com/file/d/1D2uDYqe46tAXuk96SpY8duzWqU0fMHUr/view?usp=sharing",
  },
  {
    slug: "student-information-system",
    title: "Prediksi Cuaca Gunung — Sistem IoT & Machine Learning",
    description:
      "Sistem pemantauan cuaca berbasis Internet of Things (IoT) yang mengumpulkan data suhu dan kecepatan angin secara real-time serta memanfaatkan machine learning untuk memprediksi suhu 30 menit ke depan.",
    tags: ["C", "Random Forest", "MySQL", "ESP 8266"],
    images: [
      "/projects/student-information-system/suhu1.jpeg",
      "/projects/student-information-system/suhu2.jpeg",
      "/projects/student-information-system/suhu3.jpg",
    ],
    details: [
      "Prediksi Cuaca Gunung merupakan proyek berbasis Internet of Things (IoT) dan machine learning yang dikembangkan untuk memantau kondisi lingkungan pegunungan serta melakukan prediksi perubahan suhu dalam jangka pendek.",
      "Sistem menggunakan perangkat IoT yang dilengkapi sensor untuk mengukur suhu udara dan kecepatan angin secara real-time. Data hasil pengukuran kemudian dikirimkan dan disimpan ke dalam database untuk digunakan sebagai data pemantauan dan analisis.",
      "Data yang telah dikumpulkan selanjutnya diproses menggunakan model machine learning untuk menghasilkan prediksi suhu udara 30 menit ke depan.",
      "Proyek ini juga mencakup proses pengujian model prediksi untuk mengevaluasi kemampuannya dalam memperkirakan suhu berdasarkan data hasil pengukuran sensor.",
      "Melalui proyek ini, teknologi IoT, pengelolaan database, dan machine learning diintegrasikan menjadi sebuah sistem pemantauan dan prediksi kondisi lingkungan.",
    ],
  },
];

export const contact = {
  email: "rizkyyohan14@gmail.com",
  phone: "+62 851-1162-1043",
  location: "Jakarta, Indonesia",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/rizkyyohan",
      handle: "@rizkyyohan",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rskyyohan",
      handle: "@rizkyyohan",
    },
  ],
};

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];
