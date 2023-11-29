export const DATA_POKOK_DESA = [
  {
    name: 'Informasi Desa',
    field: 'informasi_desa',
    children: [
      {
        name: 'Kode Pokok Desa',
        field: 'kode_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Nama Desa',
        field: 'nama_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Kecamatan',
        field: 'kecamatan',
        type: 'text',
        level: 0
      },
      {
        name: 'Kabupaten Kota',
        field: 'kabupaten_kota',
        type: 'text',
        level: 0
      },
      {
        name: 'Provinsi',
        field: 'provinsi',
        type: 'text',
        level: 0
      },
      {
        name: 'Tahun Pembentukan',
        field: 'tahun_pembentukan',
        type: 'text',
        level: 0
      },
      {
        name: 'Dasar Hukum Pembentukan',
        field: 'dasar_hukum_pembentukan',
        type: 'text',
        level: 0
      },
      {
        name: 'Peta Resmi Wilayah',
        field: 'peta_resmi_wilayah',
        type: 'text',
        level: 0
      },
      {
        name: 'Longitude',
        field: 'longitude',
        type: 'text',
        level: 0
      },
      {
        name: 'Latitude',
        field: 'latitude',
        type: 'text',
        level: 0
      },
      {
        name: 'Sebelah Utara',
        field: 'sebelah_utara',
        type: 'text',
        level: 0
      },
      {
        name: 'Sebelah Barat',
        field: 'sebelah_barat',
        type: 'text',
        level: 0
      },
      {
        name: 'Sebelah Selatan',
        field: 'sebelah_selatan',
        type: 'text',
        level: 0
      },
      {
        name: 'Sebelah Timur',
        field: 'sebelah_timur',
        type: 'text',
        level: 0
      },
    ]
  },
  {
    name: 'Personil Desa (Lurah)',
    field: 'personil_desa',
    children: [
      {
        name: 'Nama',
        field: 'nama_kepala_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Pangkat / Gol',
        field: 'pangkat_kepala_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'NIP',
        field: 'nip_kepala_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendidikan Terakhir',
        field: 'pendidikan_terakhir_kepala_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Pelatihan yang Pernah Diikuti',
        field: 'pelatihan_kepala_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Jenis Kelamin',
        field: 'jenis_kelamin_kepala_desa',
        type: 'text',
        level: 0
      },
    ]
  },
  {
    name: 'Sekretaris Desa',
    field: 'personil_desa',
    children: [
      {
        name: 'Nama',
        field: 'nama_sekretaris_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Pangkat / Gol',
        field: 'pangkat_sekretaris_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'NIP',
        field: 'nip_sekretaris_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendidikan Terakhir',
        field: 'pendidikan_terakhir_sekretaris_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Pelatihan yang Pernah Diikuti',
        field: 'pelatihan_sekretaris_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Jenis Kelamin',
        field: 'jenis_kelamin_sekretaris_desa',
        type: 'text',
        level: 0
      },
    ]
  },
  {
    name: 'Ketua BPD',
    field: 'personil_desa',
    children: [
      {
        name: 'Nama',
        field: 'nama_ketua_bpd',
        type: 'text',
        level: 0
      },
      {
        name: 'Pendidikan Terakhir',
        field: 'pendidikan_terakhir_ketua_bpd',
        type: 'text',
        level: 0
      },
      {
        name: 'Pelatihan yang Pernah Diikuti',
        field: 'pelatihan_ketua_bpd',
        type: 'text',
        level: 0
      },
      {
        name: 'Jenis Kelamin',
        field: 'jenis_kelamin_ketua_bpd',
        type: 'text',
        level: 0
      },
    ]
  },
  {
    name: 'Data Umum',
    field: 'data_umum',
    children: [
      {
        name: 'Tipologi Desa / Kelurahan',
        field: 'tipologi_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Klarifikasi Desa / Kelurahan',
        field: 'klasifikasi_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Kategori Desa / Kelurahan',
        field: 'kategori_desa',
        type: 'text',
        level: 0
      },
      {
        name: 'Komoditas Unggulan Berdasarkan Luas Tanam',
        field: 'komoditas_unggulan_berdasarkan_luas_tanam',
        type: 'text',
        level: 0
      },
      {
        name: 'Komoditas Unggulan Berdasarkan Nilai Ekonomi',
        field: 'komoditas_unggulan_berdasarkan_nilai_ekonomi',
        type: 'text',
        level: 0
      },
    ]
  },
  {
    name: 'Luas Wilayah',
    field: 'data_umum',
    children: [
      {
        name: 'Lahan Sawah',
        field: 'luas_lahan_sawah',
        type: 'number',
        level: 0
      },
      {
        name: 'Lahan Ladang',
        field: 'luas_lahan_ladang',
        type: 'number',
        level: 0
      },
      {
        name: 'Lahan Perkebunan',
        field: 'luas_lahan_perkebunan',
        type: 'number',
        level: 0
      },
      {
        name: 'Lahan Pertenakan',
        field: 'luas_lahan_pertenakan',
        type: 'number',
        level: 0
      },
      {
        name: 'Hutan',
        field: 'luas_hutan',
        type: 'number',
        level: 0
      },
      {
        name: 'Waduk / Danau / Situ',
        field: 'luas_waduk',
        type: 'number',
        level: 0
      },
      {
        name: 'Lahan Lainnya',
        field: 'luas_lahan_lainnya',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Sertifikat Tanah',
        field: 'jumlah_sertifikat_tanah',
        type: 'number',
        level: 0
      },
      {
        name: 'Luas Tanah Memiliki Sertifikat Tanah',
        field: 'luas_tanah_memliki_sertifikat_tanah',
        type: 'number',
        level: 0
      },
      {
        name: 'Luas Tanah Kas Desa',
        field: 'luas_tanah_kas_desa',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Orbitasi (Jarak dari Pusat Pemerintah)',
    field: 'data_umum',
    children: [
      {
        name: 'Jarak dari Pusat Pemerintahan Kecamatan ',
        field: 'jarak_dari_pusat_pemerintahan_kecamatan',
        type: 'number',
        level: 0
      },
      {
        name: 'Jarak dari Pusat Pemerintahan Kota',
        field: 'jarak_dari_pusat_pemerintahan_kota',
        type: 'number',
        level: 0
      },
      {
        name: 'Jarak dari kota/Ibukota Kabupaten',
        field: 'jarak_dari_kota_kabupaten',
        type: 'number',
        level: 0
      },
      {
        name: 'Jarak dari Ibukota Provinsi',
        field: 'jarak_dari_ibukota_provinsi',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Jumlah Kepala Keluarga',
    field: 'data_umum',
    children: [
      {
        name: 'Keluarga Pra Sejahtera',
        field: 'keluarga_pra_sejahtera',
        type: 'number',
        level: 0
      },
      {
        name: 'Keluarga Sejahtera I',
        field: 'keluarga_sejahtera_I',
        type: 'number',
        level: 0
      },
      {
        name: 'Keluarga Sejahtera II',
        field: 'keluarga_sejahtera_II',
        type: 'number',
        level: 0
      },
      {
        name: 'Keluarga Sejahtera III',
        field: 'keluarga_sejahtera_III',
        type: 'number',
        level: 0
      },
      {
        name: 'Keluarga Sejahtera III Plus',
        field: 'keluarga_sejahtera_III_plus',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Jumlah Penduduk',
    field: 'data_umum',
    children: [
      {
        name: 'Laki-laki',
        field: 'jumlah_laki_laki',
        type: 'number',
        level: 0
      },
      {
        name: 'Perempuan',
        field: 'jumlah_perempuan',
        type: 'number',
        level: 0
      },
      {
        name: 'Usia 0 – 17',
        field: 'jumlah_usia_0_17',
        type: 'number',
        level: 0
      },
      {
        name: 'Usia 18 – 56',
        field: 'jumlah_usia_18_56',
        type: 'number',
        level: 0
      },
      {
        name: 'Usia 56 ke-atas',
        field: 'jumlah_usia_56_ke_atas',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Rasio Pendidikan dan Kesehatan',
    field: 'data_umum',
    children: [
      {
        name: 'TK',
        field: 'rasio_murid_guru_tk',
        type: 'number',
        level: 0
      },
      {
        name: 'SD',
        field: 'rasio_murid_guru_sd',
        type: 'number',
        level: 0
      },
      {
        name: 'SMP',
        field: 'rasio_murid_guru_smp',
        type: 'number',
        level: 0
      },
      {
        name: 'SMA / Sederajat',
        field: 'rasio_murid_guru_sma',
        type: 'number',
        level: 0
      },
      {
        name: 'Akademi',
        field: 'rasio_murid_guru_akademi',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana',
        field: 'rasio_murid_guru_pasca_sarjana',
        type: 'number',
        level: 0
      },
      {
        name: 'Pasca Sarjana',
        field: 'rasio_penduduk_dokter_umum',
        type: 'number',
        level: 0
      },
      {
        name: 'Dokter Umum',
        field: 'rasio_penduduk_dokter_umum',
        type: 'number',
        level: 0
      },
      {
        name: 'Dokter Spesialis',
        field: 'rasio_penduduk_dokter_spesialis',
        type: 'number',
        level: 0
      },
      {
        name: 'Bidan / Dukun Bayi',
        field: 'rasio_penduduk_bidan',
        type: 'number',
        level: 0
      },
      {
        name: 'Mantri Kesehatan',
        field: 'rasio_penduduk_mantri',
        type: 'number',
        level: 0
      },
      {
        name: 'Perawat',
        field: 'rasio_penduduk_perawat',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Tingkat Pendidikan Masyarakat',
    field: 'data_umum',
    children: [
      {
        name: 'TK',
        field: 'jumlah_lulusan_tk',
        type: 'number',
        level: 0
      },
      {
        name: 'SD',
        field: 'jumlah_lulusan_sd',
        type: 'number',
        level: 0
      },
      {
        name: 'SMP',
        field: 'jumlah_lulusan_smp',
        type: 'number',
        level: 0
      },
      {
        name: 'SMA / Sederajat',
        field: 'jumlah_lulusan_sma',
        type: 'number',
        level: 0
      },
      {
        name: 'Akademi',
        field: 'jumlah_lulusan_akademi',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S1',
        field: 'jumlah_lulusan_s1',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S2',
        field: 'jumlah_lulusan_s2',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S3',
        field: 'jumlah_lulusan_s3',
        type: 'number',
        level: 0
      },
      {
        name: 'Pondok Pesantren',
        field: 'jumlah_lulusan_pondok_pesantren',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendidikan Keagamaan',
        field: 'jumlah_lulusan_pendidikan_agama',
        type: 'number',
        level: 0
      },
      {
        name: 'Sekolah Luar Biasa',
        field: 'jumlah_lulusan_sekolah_luar_biasa',
        type: 'number',
        level: 0
      },
      {
        name: 'Kursus Keterampilan',
        field: 'jumlah_kursus_keterampilan',
        type: 'number',
        level: 0
      },
      {
        name: 'Tidak Lulus',
        field: 'jumlah_tidak_lulus',
        type: 'number',
        level: 0
      },
      {
        name: 'Tidak Bersekolah',
        field: 'jumlah_tidak_bersekolah',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Tingkat Pendidikan Masyarakat',
    field: 'data_umum',
    children: [
      {
        name: 'TK',
        field: 'jumlah_lulusan_tk',
        type: 'number',
        level: 0
      },
      {
        name: 'SD',
        field: 'jumlah_lulusan_sd',
        type: 'number',
        level: 0
      },
      {
        name: 'SMP',
        field: 'jumlah_lulusan_smp',
        type: 'number',
        level: 0
      },
      {
        name: 'SMA / Sederajat',
        field: 'jumlah_lulusan_sma',
        type: 'number',
        level: 0
      },
      {
        name: 'Akademi',
        field: 'jumlah_lulusan_akademi',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S1',
        field: 'jumlah_lulusan_s1',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S2',
        field: 'jumlah_lulusan_s2',
        type: 'number',
        level: 0
      },
      {
        name: 'Sarjana S3',
        field: 'jumlah_lulusan_s3',
        type: 'number',
        level: 0
      },
      {
        name: 'Pondok Pesantren',
        field: 'jumlah_lulusan_pondok_pesantren',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendidikan Keagamaan',
        field: 'jumlah_lulusan_pendidikan_agama',
        type: 'number',
        level: 0
      },
      {
        name: 'Sekolah Luar Biasa',
        field: 'jumlah_lulusan_sekolah_luar_biasa',
        type: 'number',
        level: 0
      },
      {
        name: 'Kursus Keterampilan',
        field: 'jumlah_kursus_keterampilan',
        type: 'number',
        level: 0
      },
      {
        name: 'Tidak Lulus',
        field: 'jumlah_tidak_lulus',
        type: 'number',
        level: 0
      },
      {
        name: 'Tidak Bersekolah',
        field: 'jumlah_tidak_bersekolah',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Satana dan Prasarana',
    field: 'data_umum',
    children: [
      {
        name: 'Puskesmas',
        field: 'prasarana_puskesmas',
        type: 'number',
        level: 0
      },
      {
        name: 'Puskesmas Pembantu',
        field: 'prasarana_puskesmas_pembantu',
        type: 'number',
        level: 0
      },
      {
        name: 'Poskesdes',
        field: 'prasarana_poskesdes',
        type: 'number',
        level: 0
      },
      {
        name: 'Posyandu dan Polindes ',
        field: 'prasarana_posyandu',
        type: 'number',
        level: 0
      },
      {
        name: 'Perpustakaan Desa',
        field: 'prasarana_perpustakaan_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Sekolah PAUD',
        field: 'prasarana_gedung_sekolah_paud',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Sekolah TK',
        field: 'prasarana_gedung_sekolah_tk',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Sekolah SD',
        field: 'prasarana_gedung_sekolah_sd',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Sekolah SMP',
        field: 'prasarana_gedung_sekolah_smp',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Sekolah SMA',
        field: 'prasarana_gedung_sekolah_sma',
        type: 'number',
        level: 0
      },
      {
        name: 'Gedung Perguruan Tinggi',
        field: 'prasarana_gedung_perguruan_tinggi',
        type: 'number',
        level: 0
      },
      {
        name: 'Masjid',
        field: 'prasarana_masjid',
        type: 'number',
        level: 0
      },
      {
        name: 'Mushola',
        field: 'prasarana_mushola',
        type: 'number',
        level: 0
      },
      {
        name: 'Gereja',
        field: 'prasarana_gereja',
        type: 'number',
        level: 0
      },
      {
        name: 'Pura',
        field: 'prasarana_pura',
        type: 'number',
        level: 0
      },
      {
        name: 'Vihara',
        field: 'prasarana_vihara',
        type: 'number',
        level: 0
      },
      {
        name: 'Klenteng',
        field: 'prasarana_klenteng',
        type: 'number',
        level: 0
      },
      {
        name: 'Olahraga',
        field: 'prasarana_olahraga',
        type: 'number',
        level: 0
      },
      {
        name: 'Kesenian / Budaya',
        field: 'prasarana_kesenian_budaya',
        type: 'number',
        level: 0
      },
      {
        name: 'Balai Pertemuan',
        field: 'prasarana_balai_pertemuan',
        type: 'number',
        level: 0
      },
      {
        name: 'Sumur Desa',
        field: 'prasarana_sumur_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Pasar Desa',
        field: 'prasarana_pasar_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Lainnya',
        field: 'prasarana_lainnya',
        type: 'number',
        level: 0
      },
      {
        name: 'Jalan Desa(Aspal / Beton)',
        field: 'prasarana_jalan_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Jalan Kabupaten(Aspal / Beton)',
        field: 'prasarana_jalan_kabupaten',
        type: 'number',
        level: 0
      },
      {
        name: 'Jalan Provinsi(Aspal / Beton)',
        field: 'prasarana_jalan_provinsi',
        type: 'number',
        level: 0
      },
      {
        name: 'Jalan Nasional(Aspal / Beton)',
        field: 'prasarana_jalan_nasional',
        type: 'number',
        level: 0
      },
      {
        name: 'Tambatan Perahu',
        field: 'prasarana_tambatan_perahu',
        type: 'number',
        level: 0
      },
      {
        name: 'Perahu Motor',
        field: 'prasarana_perahu_motor',
        type: 'number',
        level: 0
      },
      {
        name: 'Lapangan Terbang',
        field: 'prasarana_lapangan_terbang',
        type: 'number',
        level: 0
      },
      {
        name: 'Jembatan Besi',
        field: 'prasarana_jembatan_besi',
        type: 'number',
        level: 0
      },
      {
        name: 'Hidran Umum',
        field: 'prasarana_hidran_umum',
        type: 'number',
        level: 0
      },
      {
        name: 'Penampung Air Hujan',
        field: 'prasarana_penampung_air_hujan',
        type: 'number',
        level: 0
      },
      {
        name: 'PAMSIMAS',
        field: 'prasarana_pamsimas',
        type: 'number',
        level: 0
      },
      {
        name: 'Pengolahan Air Bersih',
        field: 'prasarana_pengolahan_air_bersih',
        type: 'number',
        level: 0
      },
      {
        name: 'Sumur Gali',
        field: 'prasarana_sumur_gali',
        type: 'number',
        level: 0
      },
      {
        name: 'Sumur Pompa',
        field: 'prasarana_sumur_pompa',
        type: 'number',
        level: 0
      },
      {
        name: 'Tangki Air Bersih',
        field: 'prasarana_tangki_air',
        type: 'number',
        level: 0
      },
      {
        name: 'MCK Umum',
        field: 'prasarana_mck_umum',
        type: 'number',
        level: 0
      },
      {
        name: 'Jamban Keluarga',
        field: 'prasarana_jamban_keluarga',
        type: 'number',
        level: 0
      },
      {
        name: 'Saluran Drainase',
        field: 'prasarana_saluran_drainase',
        type: 'number',
        level: 0
      },
      {
        name: 'Pintu Air',
        field: 'prasarana_pintu_air',
        type: 'number',
        level: 0
      },
      {
        name: 'Saluran Irigasi',
        field: 'prasarana_saluran_irigasi',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Keuangan',
    field: 'keuangan',
    children: [
      {
        name: 'Pendapatan Desa / Kelurahan',
        field: 'pendapatan_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendapatan Asli Desa / Kelurahan',
        field: 'pendapatan_asli_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Pungutan / Retribusi',
        field: 'pendapatan_pungutan',
        type: 'number',
        level: 0
      },
      {
        name: 'Hasil Bumdes',
        field: 'pendapatan_hasil_usaha',
        type: 'number',
        level: 0
      },
      {
        name: 'Hibah / Swadaya',
        field: 'pendapatan_hibah',
        type: 'number',
        level: 0
      },
      {
        name: 'Pendapatan Lainnya',
        field: 'pendapatan_lainnya',
        type: 'number',
        level: 0
      },
      {
        name: 'Bantuan yang Diterima Desa / Kelurahan',
        field: 'pendapatan_bantuan_yang_diterima',
        type: 'number',
        level: 0
      },
      {
        name: 'Pemerintah',
        field: 'pendapatan_bantuan_pemerintah',
        type: 'number',
        level: 0
      },
      {
        name: 'Provinsi',
        field: 'pendapatan_bantuan_provinsi',
        type: 'number',
        level: 0
      },
      {
        name: 'kabupaten / Kota',
        field: 'pendapatan_bantuan_kabupaten',
        type: 'number',
        level: 0
      },
      {
        name: 'Bantuan Lain Tidak Meningkat',
        field: 'pendapatan_bantuan_lainnya',
        type: 'number',
        level: 0
      },
      {
        name: 'SILPA / SIKPA',
        field: 'silpa_sikpa',
        type: 'number',
        level: 0
      },
      {
        name: 'Dana Cadangan',
        field: 'dana_cadangan',
        type: 'number',
        level: 0
      },
      {
        name: 'Belanja Desa / Kelurahan',
        field: 'belanja_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Belanja Rutin',
        field: 'belanja_rutin_desa',
        type: 'number',
        level: 0
      },
      {
        name: 'Belanja Tidak Rutin',
        field: 'belanja_tidak_rutin_desa',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'LPM (Lembaga Pemberdayaan Masyarakat)',
    field: 'kelembagaan',
    children: [
      {
        name: 'Jumlah Pengurus',
        field: 'jumlah_pengurus_lpm',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Anggota',
        field: 'jumlah_anggota_lpm',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Kegiatan Per Bulan',
        field: 'jumlah_kegiatan_per_bulan_lpm',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Dana yang Dikelola',
        field: 'jumlah_dana_yang_dikelola_lpm',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Lembaga Adat',
    field: 'kelembagaan',
    children: [
      {
        name: 'Pemangku Adat',
        field: 'pemangku_adat',
        type: 'number',
        level: 0
      },
      {
        name: 'Kepengurusan Adat',
        field: 'kepengurusan_adat',
        type: 'number',
        level: 0
      },
      {
        name: 'Simbol Adat',
        field: 'simbol_adat',
        type: 'number',
        level: 0
      },
      {
        name: 'Kegiatan Adat',
        field: 'kegiatan_adat',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'TP PKK',
    field: 'kelembagaan',
    children: [
      {
        name: 'Jumlah Pengurus',
        field: 'jumlah_pengurus_pkk',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Anggota',
        field: 'jumlah_anggota_pkk',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Kegiatan Per Bulan',
        field: 'jumlah_kegiatan_per_bulan_pkk',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Buku Administrasi yang Dikelola',
        field: 'jumlah_buku_administrasi_yang_dikelola_pkk',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Dana yang Dikelola',
        field: 'jumlah_dana_yang_dikelola_pkk',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'BUMDes',
    field: 'kelembagaan',
    children: [
      {
        name: 'Jumlah BUMDes',
        field: 'jumlah_bumdes',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Modal Dasar BUMDes',
        field: 'jumlah_modal_besar_bumdes',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Keuangan yang Dikelola BUMDes',
        field: 'jumlah_keuangan_yang_dikelola_bumdes',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'Karang Taruna',
    field: 'kelembagaan',
    children: [
      {
        name: 'Jenis Kegiatan',
        field: 'jenis_kegiatan_karangtaruna',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Pengurus',
        field: 'jumlah_pengurus_karangtaruna',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Anggota',
        field: 'jumlah_anggota_karangtaruna',
        type: 'number',
        level: 0
      },
    ]
  },
  {
    name: 'RT / RW',
    field: 'kelembagaan',
    children: [
      {
        name: 'Jumlah RW',
        field: 'jumlah_rw',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah RT',
        field: 'jumlah_rt',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Bantuan yang Diterima RW Dalam Sebulan',
        field: 'jumlah_bantuan_yang_diterima_rw',
        type: 'number',
        level: 0
      },
      {
        name: 'Jumlah Bantuan yang Diterima RT Dalam Sebulan',
        field: 'jumlah_bantuan_yang_diterima_rt',
        type: 'number',
        level: 0
      },
      {
        name: 'Lembaga Kemasyarakatan Lainnya',
        field: 'lembaga_kemasyarakatan_lainnya',
        type: 'number',
        level: 0
      },
    ]
  },


]