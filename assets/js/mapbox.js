// Set up the Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJlaHdlMiIsImEiOiJjbHgzejIwbWcweWF0MmtxMXhzZ3JpdHRxIn0.QWRObYX_632YsxXJGMkv-w"

// Initialize the Mapbox map
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/abehwe2/cm4i6p3kg00t701qt3ki4a4ip/draft",
  center: [106.832, -6.983], // Initial map center
  zoom: 6, // Initial zoom level
})

// Chapters for storytelling
const chapters = [
  {
    id: "serangan-pertama",
    alignment: "left",
    hidden: false,
    title: "Serangan Pertama",
    description:
      "Penyerangan pertama ke Batavia dimulai pada musim kemarau, saat musim panen sehingga memudahkan dalam persiapan bekal. Kabar penyerangan sudah terdengar sejak lama di Batavia, Mataram Islam mengerahkan pasukan sekitar 4.800 - 10.000.",
    location: {
      center: [107.6191, -6.9175], // Approximate center of Java
      zoom: 6, // Zoom level to show the island
      pitch: 0,
      bearing: 0,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "pelabuhan-batavia-13-april-1628",
    alignment: "left",
    hidden: false,
    title: "13 April 1628",
    image:
      "/SER 1/13 April 1628.png",
    description:
      "Kyai Rangga tiba dengan 14 kapal bermuatan beras ke Batavia atas perintah Tumenggung Tegal. Kyai Rangga memohon kepada Belanda untuk membantu Sultan Agung untuk melawan Banten dan mengirim utusan ke Mataram Islam. Permohonan pertama dipertimbangkan oleh Belanda, sedangkan untuk permohonan terakhir ditolak karena seluruh pelabuhan ditutup ketat.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,
      bearing: -13,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "pelabuhan-batavia-22-agustus-1628",
    alignment: "left",
    hidden: false,
    title: "22 Agustus 1628",
    image: "/SER 1/22 Agustus 1628.png",
    description:
      "Tumenggung Baureksa, sebagai panglima tertinggi armada Jawa telah tiba ke Batavia dengan pasukan yang terdiri dari 50 kapal. Kapal ini memuat awak tidak kurang dari 900 awak kapal, 150 ekor ternak, 3.600 liter beras, 10.000 ikat padi, dan 26.000 kelapa.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,
      bearing: 90,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "pelabuhan-batavia-24-agustus-1628",
    alignment: "right",
    hidden: false,
    title: "24 Agustus 1628",
    image: "/SER 1/24 Agustus 1628.png",
    description:
      "Tiba 7 kapal yang singgah ke Batavia untuk meminta izin perjalanan ke Malaka. Ternyata kapal-kapal ini merupakan pasukan yang sama - sama berada di bawah kepemimpinan Tumenggung Baureksa. Belanda mencoba menghadang agar kapal yang tiba lebih awal tidak bertemu dengan kapal ini supaya tidak dapat menyalurkan bantuan senjata. Tetapi usaha Belanda gagal karena akhirnya kapal - kapal tersebut dapat bertemu. VOC (Belanda) akhirnya pun melarikan diri ke Benteng Paarel yang baru saja dibangun setinggi 12 kaki.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,
      bearing: 65,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "sungai-marunda-25-agustus-1628",
    alignment: "left",
    hidden: false,
    title: "25 Agustus 1628",
    image: "/SER 1/25 Agustus 1628.png",
    description:
      "Pendaratan Pasukan Mataram Islam yang ketiga menggunakan 27 kapal perang. Kapal - kapal tersebut berpangkal di muara Sungai Marunda yang berada di 9 km sebelah Timur Tanjung Priok. Pasukan pendaratan ketiga melaporkan kedatangan mereka kepada pasukan yang lebih pertama tiba di Batavia.",
    location: {
      center: [106.958378, -6.087664],
      zoom: 16,
      pitch: 56,
      bearing: 78,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-26-agustus-1628",
    alignment: "right",
    hidden: false,
    title: "26 Agustus 1628",
    image: "/SER 1/26 Agustus 1628.png",
    description:
      "Pasukan Mataram di bawah kepemimpinan Tumenggung Baureksa dari Kendal tiba ke Batavia. Pasukan yang tiba berjumlah 10.000 orang. Karena kedatangan pasukan tersebut terlambat 2 hari, mereka hanya bertemu dengan angkatan laut yang gagal merebut benteng VOC.",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: -13,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "batavia-26-agustus-1628",
    alignment: "right",
    hidden: false,
    title: "26 Agustus 1628",
    image: "/SER 1/26 Agustus 1628 B.png",
    description:
      "Pada pagi hari sebelumnya, Belanda mendengar kabar datangnya pasukan di bawah kepemimpinan Tumenggung Baureksa dari Kendal. Saat itu juga Belanda langsung mempersiapkan diri dengan melakukan pengosongan kota pada bagian barat dan selatan. Rumah serta bangunan - bangunan dibakar dan diratakan dengan tanah. Tujuannya adalah untuk mempermudah Belanda menghadapi pasukan Mataram Islam.",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: 17,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-27-agustus-1628",
    alignment: "left",
    hidden: false,
    title: "27 Agustus 1628",
    image: "/SER 1/27 Agustus 1628.png",
    description:
      "Penyerangan pertama oleh Pasukan Mataram Islam di bawah kepemimpinan Tumenggung Baureksa terjadi di Benteng Holland tepatnya pada malam hari. Akibat penyerangan yang dilancarkan semalam suntuk, menyebabkan VOC hampir kehabisan peluru dan banyak meriam yang rusak. Selain itu, penyerangan ini juga membuat sebagian besar orang Belanda juga panik dan berlari ketakutan menuju ke arah benteng.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 156,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-3-september-1628",
    alignment: "right",
    hidden: false,
    title: "3 September 1628",
    image: "/SER 1/3 September 1628.png",
    description:
      "Pasukan Mataram Islam dikerahkan untuk membuat tanggul dan parit - parit perlindungan. Selain itu, juga disiapkan beberapa meriam yang menghadap ke Benteng Holland. Penyerangan ini menimbulkan kerusakan kecil pada benteng tersebut.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 45,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-7-september-1628",
    alignment: "right",
    hidden: false,
    title: "3 September 1628",
    image: "/SER 1/7 - 8 September 1628.png",
    description:
      "Penyerangan juga dilakukan pada Benteng Paarel dan Benteng Gelderland di tanggal yang sama. Pasukan Mataram Islam melakukan penyerangan tidak hanya di malam hari, melainkan juga di siang hari saat dimana VOC melakukan patroli. Karena permasalahan ini, VOC menawarkan imbalan 100 bagi siapa saja yang rela menangkap prajurit Mataram Islam. Namun, usaha yang dilakukan VOC ini terbilang sia - sia dan tidak membawa hasil. ",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 178,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-10-september-1628",
    alignment: "right",
    hidden: false,
    title: "10 - 11 September 1628",
    image: "/SER 1/10-11 September 1628.png",
    description:
      "Pada situasi di sekitar benteng, Pasukan Mataram Islam memajukan garis pertahanan dengan mendekati benteng, tetapi masih berada di luar jangkauan tembakan dari benteng. Pasukan Mataram Islam mulai menyusun barikade kayu dan bambu sebagai tempat berlindung. Sementara itu, pada tanggal yang sama juga terjadi pertempuran di muara Sungai Marunda. Pertempuran ini menyebabkan pihak VOC terdesak dan terpaksa masuk ke kota. Dalam pertempuran ini VOC mengerahkan sekitar 1500 orang Cina, 400 orang Jepang, dan 70 orang Mardijker. Situasi dimana Pasukan Mataram Islam memajukan garis pertahanan berlangsung hingga hari selanjutnya.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 16,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-12-september-1628",
    alignment: "right",
    hidden: false,
    title: "12 September 1628",
    image: "/SER 1/12 September 1628.png",
    description:
      "VOC melancarkan serangan balasan mendadak terhadap Pasukan Mataram Islam. Serangan ini berhasil menghancurkan garis depan Pasukan Mataram Islam beserta parit - parit perlindungan mereka. Dalam penyerangan ini, VOC mengerahkan 65 serdadu yang dilindungi 150 penembang senapan kuno. Sebanyak 40 orang Prajurit Mataram Islam tewas dalam penyerangan ini.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 45,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-september-1628",
    alignment: "right",
    hidden: false,
    title: "September 1628",
    image: "/SER 1/September 1628.png",
    description:
      "Persediaan logistik Mataram Islam mulai menipis sehingga didatangkan bantuan makanan dari Banten dan Sumedang. Penyerangan selanjutnya,  VOC merencanakan untuk mengerahkan 700 orang pasukan inti ditambah pasukan milisi. Di sisi lainnya, Tumenggung Baureksa mengerahkan pasukan sebanyak 4.800 orang, 3.600 orang pelaut, dan 3.000 orang prajurit Sumedang. Ditambah dengan Pasukan Banten yang tetap berdiri sendiri.",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: 214,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-21-september-1628",
    alignment: "right",
    hidden: false,
    title: "21 September 1628",
    image: "/SER 1/21 September 1628.png",
    description:
      "Pasukan Mataram Islam kembali melakukan penyerangan terhadap Benteng Holland. Pasukan Mataram berusaha menghancurkan pertahanan VOC dengan menaiki benteng serta mendobrak benteng dengan balok - balok kayu. VOC menyerang balik dengan mengerahkan 300 serdadu dan 100 warga sipil (terdiri dari Mardjiker). Pertempuran ini memakan banyak korban pada sisi Pasukan Mataram Islam, sekitar 1.200 - 1.300 Pasukan Mataram Islam gugur, 2.000 - 3.000 pasukan ditawan VOC. Diperkirakan sebanyak 3.000 - 4.000 pasukan masih berkeliaran di hutan mencari makan. ",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 120,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-holland-22-september-1628",
    alignment: "right",
    hidden: false,
    title: "22 September 1628",
    image: "/SER 1/22 September 1628.png",
    description:
      "Tumenggung Baureksa memimpin serangan dengan sasaran utama adalah Benteng Bommer dan Benteng Friesland yang terletak di selatan benteng induk, serta Benteng Holland. Serangan ini menyebabkan Benteng Holland mengalami kerusakan cukup parah dan hampir jatuh ke tangan Pasukan Mataram Islam. Akan tetapi usaha ini tidak berhasil karena terdesak oleh pasukan bantuan kompeni (VOC) yang dipimpin oleh Van Gorcum ",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 69,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-25-september-1628",
    alignment: "right",
    hidden: false,
    title: "25 September 1628",
    image: "/SER 1/25 September 1628.png",
    description:
      "Penyerangan oleh pasukan Tumenggung Baureksa terhadap Benteng Holland kembali terjadi. Penyerangan ini terjadi sangat tiba - tiba saat VOC sedang membongkar kubu - kubu pertahanan Pasukan Mataram Islam sehingga menyebabkan VOC kabur. VOC menjadi pihak yang memperoleh banyak kerugian akibat pertempuran ini, karena sebanyak 56 orang tewas, 24 orang luka - luka berat, 200 orang kehilangan senjata, dan 200 senjata tajam dirampas oleh pihak Mataram Islam. ",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 189,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-8-oktober-1628",
    alignment: "right",
    hidden: false,
    title: "8 - 11 Oktober 1628",
    image: "/SER 1/8 - 11 Oktober 1628.png",
    description:
      "Beberapa sekutu VOC berasal dari tenaga sukarela dan pedagang - pedangan yang diundang ke Batavia, khususnya orang - orang Cina. Tumenggung Baureksa mengetahui hal ini dan segera mengirimkan surat kepada Sauw Beng Kong, yang merupakan kapten Cina di Batavia. Isi surat itu menyatakan agar orang - orang Cina tidak membantu VOC. Namun, surat permintaan tersebut ditolak oleh Sauw Beng Kong sehingga menyebabkan adanya penyerangan terhadap orang Cina yang dilakukan oleh Pasukan Mataram Islam. Pengeroyokan ini terjadi di Sungai Angke dan Sungai Ancol.",
    location: {
      center: [106.830720,-6.122750],
      zoom: 16,
      pitch: 56,
      bearing: 68,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-21-oktober-1628",
    alignment: "right",
    hidden: false,
    title: "21 Oktober 1628",
    image: "/SER 1/21 Oktober 1628.png",
    description:
      "Akibat serangan yang bertubi - tubi yang diperoleh dari Pasukan Mataram Islam. Gubernur Jenderal VOC yaitu Jan Pieterszoon Coen merencanakan serangan balasan dengan mengerahkan pasukan sebanyak 2.866 pasukan yang terdiri dari 2 armada dan 7 sekoci. Beserta pasukan inti sebanyak 700 orang, 210 orang miliki Mardjiker, dan 700 orang Cina dan Jepang. Serangan balasan yang dipimpin oleh Jaques le Febre menyebabkan gugurnya Tumenggung Baureksa beserta 200 orang Prajurit Mataram Islam lainnya. Dengan gugurnya panglima Pasukan Mataram Islam, menyebabkan mental Pasukan Mataram Islam menjadi lemah. Sementara itu, Pasukan Sumedang dan Ukur  melarikan diri akibat tekanan dari VOC dan bersembunyi di Gunung Lambung, Banten.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,
      bearing: 147,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-22-oktober-1628",
    alignment: "right",
    hidden: false,
    title: "22 Oktober 1628",
    image: "/SER 1/22 Oktober 1628.png",
    description:
      "Satu hari setelahnya setelah Tumenggung Baureksa gugur, datangnya pasukan bantuan dari Mataram Islam yang dipimpin oleh Tumenggung Sura Agul - Agul, Kyai Adipati Mandureja, dan Kyai Adipati Upasanta. Datangnya pasukan bantuan membuat semangat Pasukan Mataram Islam yang pertama kembali. Pasukan ini terdiri dari dua kesatuan, yaitu angkatan darat dan angkatan laut. Pada malam harinya, terjadi penyerangan kembali terhadap Pasukan Mataram Islam yang berpangkalan di Marunda.",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: 265,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "benteng-holland-15-november-1628",
    alignment: "right",
    hidden: false,
    title: "15 November 1628",
    image: "/SER 1/15 November 1628.png",
    description:
      "Tumenggung Sura Agul - Agul memerintahkan Kyai Adipati Mandureja dan Kyai Adipati Upasanta untuk melayangkan serangan yang terakhir terhadap Benteng Holland. Pertempuran ini menyebabkan jatuhnya korban jiwa baik pada sisi Mataram Islam maupun VOC. Mataram Islam kehilangan sekitar 744 orang prajurit, sedangkan VOC kehilangan ratusan serdadu. Kekalahan ini menyebabkan para senopati takut menghadapi tanggung jawab yang dibebankan oleh Sultan Agung. Oleh karena itu, Tumenggung Sura Agul - Agul membunuh Kyai Adipati Mandureja dan Kyai Adipati Upasanta untuk mengurangi tanggung jawab dan kesan yang kurang baik. Namun, perbuatan ini akhirnya diketahui oleh Sultan Agung. Pembunuhan ini terjadi pada tanggal 1 Desember 1628. ",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: 200,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
       {
    id: "benteng-holland-28-november-1628",
    alignment: "right",
    hidden: false,
    title: "28 November 1628",
    image: "/SER 1/28 November 1628.png",
    description:
      "Penyerangan tahap dua dilakukan kembali oleh Pasukan Mataram Islam untuk merebut Benteng Holland. Penyerangan ini menyebabkan 100 - 300 prajurit tepergok serdadu VOC. Beberapa prajurit dapat melarikan diri, tetapi sisanya ditembak mati oleh VOC. ",
    location: {
      center: [106.819563, -6.1416079],
      zoom: 16,
      pitch: 56,
      bearing: 10,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "kota-gede-3-desember-1628",
    alignment: "right",
    hidden: false,
    title: "3 Desember 1628",
    image: "/SER 1/3 Desember 1629.png",
    description:
      "Pasukan Mataram Islam meninggalkan Batavia dan membiarkan mayat - mayat prajurit berserakan di tanah. VOC menemukan sekitar 744 Prajurit Mataram Islam tidak dikuburkan dan beberapa ditemukan tanpa kepala. Atas tindakan yang telah dilakukan oleh Tumenggung Sura Agul - Agul karena membunuh Kyai Adipati Mandureja dan Kyai Adipati Upasanta, maka Tumenggung Sura Agul - Agul perlu menebus kesalahannnya. Tumenggung Sura Agul - Agul dieksekusi bersama banyak bangsawan atas kegagalannya merebut Batavia. ",
    location: {
      center: [110.3978453, -7.829855287],
      zoom: 16,
      pitch: 56,
      bearing: 190,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
    {
    id: "Batavia-3-desember-1628",
    alignment: "right",
    hidden: false,
    title: "3 Desember 1628",
    image: "/SER 1/3 Desember 1629.png",
    description:
      "Pasukan Mataram Islam meninggalkan Batavia dan membiarkan mayat - mayat prajurit berserakan di tanah. VOC menemukan sekitar 744 Prajurit Mataram Islam tidak dikuburkan dan beberapa ditemukan tanpa kepala. Atas tindakan yang telah dilakukan oleh Tumenggung Sura Agul - Agul karena membunuh Kyai Adipati Mandureja dan Kyai Adipati Upasanta, maka Tumenggung Sura Agul - Agul perlu menebus kesalahannnya. Tumenggung Sura Agul - Agul dieksekusi bersama banyak bangsawan atas kegagalannya merebut Batavia. ",
    location: {
      center: [110.3978453, -7.829855287],
      zoom: 16,
      pitch: 56,
      bearing: 120,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "serangan-kedua",
    alignment: "left",
    hidden: false,
    title: "Serangan Kedua",
    image: "", // Add an image URL if available
    description:
      "Munculnya serangan kedua disebabkan karena gagalnya usaha Sultan Agung dalam serangan pertama ke Batavia.",
    location: {
      center: [110.0, -7.5], // Approximate center of Java
      zoom: 6, // Zoom level to show the island
      pitch: 0,
      bearing: 0,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-16-april-1629",
    alignment: "left",
    hidden: false,
    title: "16 April 1629",
    image: "/SER 2/16 April 1629.png",
    description:
      "Sebelum melakukan serangan kedua ke Batavia, Sultan Agung telah lebih dahulu melakukan persiapan dengan teliti dan seksama. Sultan Agung mengirim seorang mata - mata Mataram Islam yang bernama Warga untuk mengawasi Benteng Batavia. Warga menyamar sebagai pedagang untuk mengamati pergerakan benteng dan melaporakannnya ke pihak Mataram Islam. Seluruh laporan sudah berhasil disampaikan ke pihak Mataram Islam. Namun, naasnya Warga ditangkap, disiksa, dan dipenjarakan oleh VOC.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 14,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-pertengahan-mei-1629",
    alignment: "left",
    hidden: false,
    title: "Pertengahan Mei 1629",
    image: "/SER 2/Mei 1629..png",
    description:
      "Penyerangan dibagi menjadi 2 gelombang, yaitu gelombang pertama dan gelombang kedua. Gelombang pertama terdiri atas arteleri beserta amonisinya. Gelombang pertama dipimpin oleh Adipati Ukur.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 105,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "kota-gede-20-juni-1629",
    alignment: "left",
    hidden: false,
    title: "20 Juni 1629",
    image: "/SER 2/20 Juni 1629.png",
    description:
      "Setelah 1 bulan gelombang pertama berangkat ke Batavia, gelombang kedua mulai menyusul ke Batavia. Gelombang kedua terdiri dari pasukan infanteri dengan jumlah 14.000 prajurit. Gelombang kedua dipimpin oleh Adipati Juminah.",
    location: {
      center: [110.3978453, -7.829855287],
      zoom: 16,
      pitch: 56,  
      bearing: 96,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "kasteel-batavia-22-agustus-1629",
    alignment: "left",
    hidden: false,
    title: "22 Agustus 1629",
    image: "/SER 2/22 Agustus 1629.png",
    description:
      "Serangan kedua difokuskan pada Benteng Paarel, Benteng Robijn, Benteng Safter, Benteng Diamant, dan Benteng Holland. Seluruh benteng tersebut dikepung berlapis - lapis dan semua persenjataan dan logistik diatur dengan tertib. Namun, sebelum serangan ini terjadi, VOC telah melakukan persiapan pertahanan dengan memfasilitasi benteng - benteng dengan meriam berkaliber besar, serta pintu - pintu untuk menyelamatkan diri.",
    location: {
      center: [106.813058, -6.1288896],
      zoom: 16,
      pitch: 56,  
      bearing: 175,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
   {
    id: "batavia-12-september-1629",
    alignment: "left",
    hidden: false,
    title: "12 September 1629",
    image: "/SER 2/12 September 1629.png",
    description:
      "Pasukan Mataram Islam telah menempatkan diri dalam parit perlindungan untuk mempersiapkan penyerangan. Penyerangan dilakukan di Benteng Holland. Di tanggal yang sama, Pasukan Mataram Islam berjumlah 200 orang melakukan penyerbuan menuju Benteng Bommel. Bahkan terdapat 9 prajurit yang sudah menaiki benteng tersebut. Namun, usaha ini gagal karena Pasukan Mataram Islam dipukul mundur oleh VOC.",
    location: {
      center: [106.812778, -6.138611],
      zoom: 16,
      pitch: 56,  
      bearing: 52,
    },
    },
  {
    id: "batavia-14-15-september-1629",
    alignment: "left",
    hidden: false,
    title: "14 - 15 September 1629",
    image: "/SER 2/14-15 September 1629.png",
    description:
      "Muncul bantuan persenjataan yang diangkut dengan gerobak dan ditarik oleh 10 ekor kerbau. Setelah bantuan senjata datang, Pasukan Mataram Islam segera menyiapkan meriam-meriam tersebut ke garis penyerangan bagian depan. Meriam - meriam tersebut diantaranya Guntur Geni, Panca Wura, dan beberapa meriam kecil. ",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 20,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-17-september-1629",
    alignment: "left",
    hidden: false,
    title: "17 September 1629",
    image: "/SER 2/17 September 1629.png",
    description:
      "Bantuan yang diterima Pasukan Mataram Islam membuat perlawanan semakin genting. VOC menyiapkan serangan balasan di bawah kepemimpinan Antoni Van Diemen. Serangan balasan tersebut dilakukan dengan membakar pertahanan Pasukan Mataram Islam yang berujung pada kekalahan Pasukan Mataram Islam. Kebakaran ini tidak berlangsung lama karena adanya hujan yang memadamkan kebakaran saat itu.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 93,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-20-september-1629",
    alignment: "left",
    hidden: false,
    title: "20 September 1629",
    image: "/SER 2/20 September 1629.png",
    description:
      "Meriam - meriam Mataram Islam berhasil membuat Benteng Holland rusak parah. Prajurit Mataram Islam tidak mendobrak ataupun menaiki benteng tersebut meskipun serdadu VOC sudah kehabisan peluru. Dalam pertempuran ini,  Gubernur Jenderal VOC yaitu Jan Pieterszoon Coen meninggal diakibatkan penyakit kolera. Karena gereja terbakar saat pengepungan 17 September, maka dari itu, Jan Pieterszoon Coen dimakamkan di Balaikota.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 146,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "kasteel-batavia-21-september-1629",
    alignment: "left",
    hidden: false,
    title: "21 September 1629",
    image: "/SER 2/21 September 1629.png",
    description:
      "Pertempuran masih berlangsung dengan Pasukan Mataram Islam yang meletakkan meriam berat pada bagian sisi barat, selatan, dan timur benteng. Pertempuran ini memakan banyak korban jiwa baik dari sisi Mataram Islam maupun VOC.",
    location: {
      center: [106.813058, -6.1288896],
      zoom: 16,
      pitch: 56,  
      bearing: 123,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "benteng-weesp-29-september-1629",
    alignment: "left",
    hidden: false,
    title: "29 September 1629",
    image: "/SER 2/29 September 1629.png",
    description:
      "Pasukan Mataram Islam selanjutnya menyerang benteng pertahanan Belanda lainnya yaitu, Benteng Weesp. Penyerangan ini menyebabkan kerugian yang cukup besar pada sisi Mataram Islam. Hal ini disebabkan karena Pasukan Mataram Islam gagal merebut benteng tersebut. ",
    location: {
      center: [106.812145, -6.1293208],
      zoom: 16,
      pitch: 56,  
      bearing: 285,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-2-oktober-1629",
    alignment: "left",
    hidden: false,
    title: "2 Oktober 1629",
    image: "/SER 2/2 Oktober 1629.png",
    description:
      "Pasukan Mataram islam mulai mundur dari medan pertempuran di Batavia. Hal ini disebabkan karena kelaparan yang dialami oleh Pasukan Mataram Islam. Awalnya, Sultan Agung sudah menyiapkan lumbung - lumbung persediaan bahan makanan di sepanjang Cirebon dan Karawang. Namun, VOC mengetahui hal ini dan langsung membakar habis lumbung - lumbung tersebut dan berujung munculnya kelaparan.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 135,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "kasteel-batavia-3-oktober-1629",
    alignment: "left",
    hidden: false,
    title: "3 Oktober 1629",
    image: "/SER 2/3 Oktober 1629.png",
    description:
      "Meskipun dengan perbekalan yang kian menipis mengancam Pasukan Mataram Islam. Serangan masih diluncurkan oleh Pasukan Mataram Islam dengan menghujani benteng - benteng VOC tembakan - tembakan gencar.",
    location: {
      center: [106.813058, -6.1288896],
      zoom: 16,
      pitch: 56,  
      bearing: 145,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
   {
    id: "kasteel-batavia-7-oktober-1629",
    alignment: "left",
    hidden: false,
    title: "7 Oktober 1629",
    image: "/SER 2/7 Oktober 1629.png",
    description:
      "Senopati Mataram yaitu Tumenggung Singaranu kembali bersama Pasukan Mataram yang masih tersisa kembali menuju Mataram Islam setelah dapat memberikan kesan dan tekanan terhadap VOC. Meskipun begitu, VOC tetap bertahan di Batavia.",
    location: {
      center: [106.813058, -6.1288896],
      zoom: 16,
      pitch: 56,  
      bearing: 321,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
  {
    id: "batavia-oktober-desember-1629",
    alignment: "left",
    hidden: false,
    title: "Oktober - Desember 1629",
    image: "/SER 2/Oktober - Desember 1929.png",
    description:
      "Karena mulai memasuki musim penghujan, penyerangan terhadap Batavia dihentikan. Pasukan Mataran Islam ditarik karena perbekalan yang menipis dan berjangkitnya wabah penyakit menular. Serangan kedua yang dapat dikatakan gagal membuat Sultan Agung memerintahkan untuk menghukum semua orang yang pulang dengan kegagalan. Itu sebabnya seluruh jalan dan pintu gerbang dijaga agar tidak seorang pun dapat kembali kepada keluarganya. Tumenggung Singaranu mengetahui gelagat itu dan menahan sisa pasukan yang berjumlah sekitar 10.000 - 14.000 orang. Tumenggung Singaranu mengirimkan istri, selir, dan anak anaknya untuk mendapatkan pengampunan Sultan Agung. Pada akhirnya Sultan Agung mengampuni Singaranu dengan syarat selama 3 tahun tidak diperbolehkan berhadapan muka dengan raja dan kemungkinan tidak menempati posisinya lagi.",
    location: {
      center: [106.808786, -6.114473],
      zoom: 16,
      pitch: 56,  
      bearing: 132,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "",
    onChapterEnter: [],
    onChapterExit: [],
  },
]

let currentIndex = 0;

// Function to update the story content and fly to the next chapter
function goToChapter(index) {
  const chapter = chapters[index];

  // Fly to the chapter location
  map.flyTo({
    center: chapter.location.center, // Assuming chapter location is always defined
    zoom: chapter.location.zoom,     // Assuming chapter zoom is always defined
    pitch: chapter.location.pitch,   // Assuming chapter pitch is always defined
    bearing: chapter.location.bearing, // Assuming chapter bearing is always defined
    essential: true,
  });

  // Update the content dynamically
  document.getElementById("story").innerHTML = `
    <h2>${chapter.title}</h2>
    ${chapter.image ? `<img src="${chapter.image}" alt="${chapter.title}" />` : ""}
    <p>${chapter.description}</p>
  `;
}

// Button click to start exploration
document.getElementById("startButton").onclick = function () {
  // Hide the introductory container
  document.getElementById("introContainer").style.display = "none";

  // Show the first chapter content
  goToChapter(currentIndex);
};

// Storytelling: Navigate to the next chapter
document.getElementById("story").addEventListener("click", () => {
  // Ensure we loop back to the first chapter after reaching the last one
  currentIndex = (currentIndex + 1) % chapters.length;

  // Proceed to the next chapter
  goToChapter(currentIndex);
});
