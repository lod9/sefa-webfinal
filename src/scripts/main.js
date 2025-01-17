



const store = Vuex.createStore({
  state: {},
  mutations: {},
  actions: {}
});

const app = Vue.createApp({
  data: () => ({
    items: [
      {
        baslik: "Paylaşımlı Hosting Nedir?",
        icerik: `
        <p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Paylaşımlı Hosting’in Avantajları Nelerdir?</p>
        <p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Öncelikle paylaşımlı hosting, en uygun fiyatlı hosting seçeneklerinden biridir. Çünkü sunucu kaynakları birden fazla kullanıcı arasında paylaşıldığı için maliyetler düşüktür. Bunun yanı sıra, paylaşımlı hosting planları genellikle kullanıcı dostu kontrol panelleri ile gelir. Böylece teknik bilgiye sahip olmayan kişiler bile web sitelerini kolayca yönetebilirler. Ayrıca çoğu hosting sağlayıcısı, paylaşımlı hosting planlarında otomatik yedekleme, güvenlik güncellemeleri ve müşteri desteği gibi ek hizmetler sunar.

Diğer bir deyişle, paylaşımlı hosting, özellikle yeni başlayanlar ve küçük işletmeler için cazip bir seçenektir. Örneğin, düşük trafikli bir web sitesi veya blog için paylaşımlı hosting yeterli olabilir. Fakat web siteniz büyüdükçe ve daha fazla kaynak gerektirdikçe, VPS hosting veya dedicated hosting gibi daha güçlü seçeneklere geçmeyi düşünebilirsiniz.</p>
<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Paylaşımlı Hosting’in Dezavantajları Nelerdir?</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Her ne kadar paylaşımlı hosting birçok avantaj sunsa da, bazı dezavantajları da vardır. Mesela, sunucu kaynakları paylaşıldığı için, aynı sunucudaki diğer kullanıcıların web sitelerindeki yoğun trafik sizin web sitenizin performansını etkileyebilir. Başka bir deyişle, “komşu etkisi” olarak bilinen bu durum, web sitenizin yavaşlamasına veya erişilemez hale gelmesine neden olabilir.

Ayrıca, paylaşımlı hosting planlarında güvenlik riskleri de mevcuttur. Zira aynı sunucudaki bir web sitesi güvenlik açığına sahipse, diğer web siteleri de risk altında olabilir. Bu nedenle, güvenilir bir hosting sağlayıcısı seçmek ve web sitenizin güvenliğini sağlamak için gerekli önlemleri almak önemlidir.</p>

<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Paylaşımlı Hosting’de Güvenlik</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Ortak hosting’de güvenlik, önemli bir konudur. Çünkü aynı sunucudaki bir web sitesinin güvenlik açığı, diğer web sitelerini de etkileyebilir. Bu nedenle, hosting sağlayıcıları güvenlik önlemleri alarak bu riski en aza indirmeye çalışır.

Örneğin, sunucuları düzenli olarak günceller, güvenlik duvarları kullanır ve kötü amaçlı yazılımlara karşı koruma sağlarlar. Buna rağmen, web sitenizin güvenliğini sağlamak için siz de bazı önlemler almalısınız. Mesela, güçlü parolalar kullanmalı, web sitenizi düzenli olarak yedeklemeli ve güvenlik eklentileri kullanmalısınız.</p>
        `,
        görsel: "./src/images/pexels-cookiecutter-17489152.jpg",
        kaynakca: "https://www.daha.net/blog/paylasimli-hosting-nedir/"
      },
      {
        baslik: "Web Hosting Optimizasyonu İçin Tavsiyeler",
        icerik: `
        <p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Web Hosting Nedir, Niçin Önemlidir?</p>
        <p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Web hosting, internet üzerinde bir web sitesinin barındırılmasını sağlayan hizmettir. Herhangi bir web sitesinin kullanıcılar tarafından erişilmesi için, o siteye ait dosyaların bir sunucuda depolanması gerekmektedir. Web hosting, bu dosyaların depolanmasının yanı sıra, bunlara erişim ve yönetim hizmetlerini de içermektedir.

Web hosting’in önemi, bir web sitesinin performansı ve kullanılabilirliği ile doğrudan ilişkilidir. İyi bir web hosting hizmeti, web sitenizin hızlı yüklenmesini, kesintisiz çalışmasını ve güvenli olmasını sağlar. Bu da, hem kullanıcı deneyimini artırır hem de arama motorları sıralamalarında olumlu bir etki yaratır. Özellikle işletmeler için güvenilir bir web hosting hizmeti seçimi, marka imajı ve müşteri güveni açısından kritik bir rol oynamaktadır.

Sonuç olarak, web hosting, bir web sitesinin hayata geçirilmesi için temel bir gerekliliktir. Doğru web hosting sağlayıcısını seçerek sitenizin performansını ve güvenliğini artırabilir, ayrıca kullanıcılarınız için daha iyi bir deneyim sunabilirsiniz.</p>
<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Web Hosting Türleri ve Farklılıkları</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Web hosting, web sitenizin çevrimiçi olarak erişilebilir olmasını sağlayan hizmetlerin genel adıdır. Ancak, farklı ihtiyaçlara yönelik çeşitli web hosting türleri mevcuttur. İşte en yaygın web hosting türleri ve onların farkları:

Paylaşımlı Hosting: En ekonomik seçenekten biridir. Bir sunucuda birçok web sitesinin barındırılması sayesinde maliyetler düşer. Ancak, diğer sitelerin trafiğine bağlı olarak performans değişkenliği olabilir.
VPS (Sanal Özel Sunucu) Hosting: Paylaşımlı hostingden daha fazla kontrol ve kaynak sunar. Sunucu, sanal makineler üzerinde çalışır ve böylece kullanıcılar, kendi kaynaklarını daha fazla kişiselleştirebilir.
Özel Sunucu Hosting: Tüm sunucunuzu sadece sizin kullanımınıza sunar. Yüksek trafik alan ve güçlü performans gereksinimleri olan siteler için idealdir. Ancak maliyeti diğer seçeneklere göre fazladır.
Bulut Hosting: Birden fazla sunucunun birleşimi ile çalışan bu sistem, daha yüksek güvenilirlik ve esneklik sağlar. Trafik dalgalanmaları yaşandığında, kaynaklar otomatik olarak dağıtılır.
WordPress Hosting: Özellikle WordPress tabanlı web siteleri için optimize edilmiştir. Hız, güvenlik ve destek gibi unsurlar üzerinde yoğunlaşır, böylece kullanıcılara sorunsuz bir deneyim sunar.
Her bir web hosting türü, işletmenizin gereksinimlerine göre farklı avantaj ve dezavantajlar sunar. Seçiminizi yaparken, ihtiyaçlarınızı ve bütçenizi göz önünde bulundurmak önemlidir. Doğru web hosting hizmeti, web sitenizin performansını ve erişilebilirliğini artırarak işinize olumlu katkıda bulunacaktır.</p>

<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Güvenlik İçin Web Hosting İpuçları</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Web hosting, web sitenizin güvenliğini sağlamak açısından kritik bir rol oynamaktadır. Güvenli bir web hosting seçimi, hem verilerinizin korunmasını hem de ziyaretçilerinizin deneyimini iyileştirir. İşte güvenlik için web hosting ipuçları:

Güçlü Şifreler Kullanın: Web hosting hesaplarınız için güçlü ve karmaşık şifreler belirleyin. Şifrelerinizi düzenli olarak güncelleyerek güvenliği artırın.
İki Aşamalı Kimlik Doğrulama: Mümkünse, iki aşamalı kimlik doğrulamayı etkinleştirerek hesaplarınıza ek bir güvenlik katmanı ekleyin.
SSL Sertifikası Edinin: SSL sertifikası, web sitenizin güvenliğini artırır ve kullanıcı verilerinin şifrelenmesini sağlar. Ziyaretçilerinizin bilgilerinin güvende olduğundan emin olur.
Güncellemeleri Takip Edin: Hosting hizmet sağlayıcınızın sürekli güncellemeler sağladığından emin olun. Yazılım güncellemeleri, güvenlik açıklarını kapatmak için kritik öneme sahiptir.
Güvenlik Duvarı Kullanımı: Güvenlik duvarları, kötü niyetli saldırılara karşı web sitenizi korumak için etkilidir. Web hosting planınıza dahili bir güvenlik duvarı olup olmadığını kontrol edin.
Yedekleme Seçeneklerini Göz Önünde Bulundurun: Veri kaybı yaşamamak için düzenli yedeklemeler yapmanız önemlidir. Hosting sağlayıcınızın sunduğu yedekleme hizmetlerini kullanın.
Kötü Amaçlı Yazılımlara Karşı Koruma: Web sitenizi kötü amaçlı yazılımlara karşı korumak için antivirüs ve kötü amaçlı yazılım tarama yazılımları kullanın.
Bu ipuçları, web sitenizin güvenliğini sağlamaya yardımcı olacak ve olası saldırılara karşı koruma sağlayacaktır. Unutmayın, güvenlik her zaman öncelik olmalıdır.</p>
<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">Web Hosting Performansını Nasıl Artırırız?</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Web hosting optimizasyonu için performansını artırmak, site hızı ve kullanıcı deneyimi açısından kritik öneme sahiptir. İşte, web hosting performansını optimize etmek için uygulayabileceğiniz bazı yöntemler:

Sunucu Konumu Seçimi: Kullanıcılarınızın bulunduğu coğrafi konuma en yakın sunucuyu seçmek, yükleme sürelerini önemli ölçüde azaltabilir.
İçerik Dağıtım Ağı (CDN) Kullanımı: CDN’ler, web sitenizin statik içeriklerini kullanıcılara daha hızlı ulaştırır ve sunucu üzerindeki yükü azaltır.
Optimizasyon Araçları: Görselleri sıkıştırmak ve kodu minify etmek, sayfa yükleme sürelerini azaltarak performansı artırır.
Hızlı Web Hosting Planı Seçimi: Web hosting sağlayıcınızın performansını göz önünde bulundurarak, daha hızlı sunucular sunan bir plan seçmeniz önemlidir.
Yük Dengeleyici Kullanımı: Sunucu üzerinde yoğun trafik olduğunda, yük dengeleyici kullanarak ziyaretçi trafiğini daha iyi yönetmek mümkündür.
Güncellemeleri Takip Etmek: Yazılım ve eklentilerinizi güncel tutarak güvenlik açıklarını azaltabilir ve genel performansı artırabilirsiniz.
Bu yöntemlerle, web hosting altyapınızın performansını artırarak kullanıcı deneyimini iyileştirebilir ve arama motoru sıralamalarınızı yükseltebilirsiniz.</p>
        `,
        görsel: "./src/images/pexels-pixabay-60504.jpg",
        kaynakca: "https://www.daha.net/blog/web-hosting-optimizasyonu-icin-tavsiyeler/"
      },
      {
        baslik: "Temel Web Hosting İhtiyaçları Nelerdir?",
        icerik: `
        <p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Tipik bir web hosting paketi, web sitenizi oluşturabilmeniz için ihtiyacınız olan çeşitli özellikleri içerir. Hosting servisinize göre, çeşitli özellikleri kapsayan, farklı hosting paketleri bulabilirsiniz. Minimumda, web sitenizin temel ihtiyaçlarını karşılayacak bulmanız çok da zor değildir.

Ancak, bazı durumlarda çeşitli ek özelliklere ihtiyaç duyarsınız. Hangi ek özelliklere ihtiyacınızın olduğu, web sitenizin tarzı ve web sitenizden nasıl bahsedilmesini istediğinize göre değişir. Bu noktada, alacağınız web hosting paketinde ne gibi özelliklere ihtiyaç duyacağınızı belirlemek önemlidir.

Bazı web hosting özellikleri, her tarzda ve kapsamda web siteleri için gereklidir. Hosting servisiniz, eğer standart pakette bu özellikleri barındırmıyorsa, bu özelliklere sahip olabilmek için ek ücret ödemeniz gerekebilir. Hosting servisiniz, bu özellikleri hiç bir şekilde size sunamıyor mu? O zaman başka bir hosting servisi aramaya başlamanızın zamanı gelmiş demektir.

Peki, tüm web sitelerinin ihtiyacı olan web hosting özellikleri nelerdir?

Yeterli depolama kapasitesi: Hosting pakediniz, web sitenize koyacağınız herşeyi içermeye yeterli disk alanına sahip olmalı.

Yeterli bant genişliği: Web sitenizin aldığı trafik arttıkça, bu trafiği kaldırabilecek bant genişliğine sahip olmanız önemlidir. Bu yüzden hosting servisinizin size sağlayacağı bant genişliğine dikkat edin.

FTP: FTP, yani Dosya Transfer Protokolü, bilgisayarınızdan web sitenize içerik yüklemenizi sağlar. Çoğu web hosting servisi, FTP’yi standart pakette bulundurur.

Teknik destek: Teknik problemlerle karşılaştığınız ilk andan itibaren sizi yönlendirebilecek bir hosting servisine mi ihtiyacınız var? İşte bu yüzden hosting paketi seçerken teknik destek hizmeti bulundurup, bulundurmayacağına dikkat etmeniz gerekir.

Çalışma süresi: Web sitenizin çalışmamasına tahammül edebilir misiniz? Cevabınız, eminiz ki, hayırdır. O yüzden de çalışma süresi yüksek olan bir hosting paketine ihtiyacınız var. %90′ın üzerinde hatta %90′lara varan çalışma süreleri vaat eden hosting paketleri bulabilmeniz mümkün. Biz de bu tarz paketleri seçmenizi öneririz.

E-posta: Eğer iş amaçlı bir web sitesi oluşturacaksanız, profesyonel e-posta adreslerine ihtiyacınız olacaktır. Bu yüzden web hosting paketinizin kaç e-posta hesabı içerebileceğine dikkat etmenizde yarar var.

Kontrol paneli: Bütün özellikleri kullanıcı dostu, tek bir panelden yönetmenizi sağlayacak bir kontrol paneli sağlayacak hosting paketi seçmeniz, sunucunuzun yönetiminde, size büyük kolaylık sağlayacaktır.</p>
        `,
        görsel: "./src/images/image1.jpg",
        kaynakca: "https://www.daha.net/blog/web-hosting-optimizasyonu-icin-tavsiyeler/"
      },
      {
        baslik: "cPanel’de Veritabanı Oluşturmak İçin Yapmanız Gerekenler",
        icerik: `
        <p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">cPanel Hosting Hesap Girişi</p>
        <p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Konuya başlamadan önce cPanel hosting hesap yönetimi hakkında önemli birkaç noktaya kısaca temas edeceğiz. Nitekim cPanel’de veritabanı oluşturmak için yapmanız gerekenler bu temel bilgilerle daha anlamlı hale gelecektir. Aslına bakarsanız, cPanel’de hosting hesabı açmak oldukça basit bir iştir. Ancak hiç bilmeyenler için hosting hesap girişi biraz zor gelebilir. Burada kısaca özetleyeceğimiz süreçleri tamamladıktan sonra diğer adımlara geçebilirsiniz.

Bilindiği üzere hosting firmasından barındırma hizmeti satın alan kullanıcılara kontrol paneli bilgileri mail yoluyla gider. Bu mailde kontrol paneli adresi, kullanıcı adı ve şifre bilgileri yer alır. Bu adres ve bilgiler sayesinde kullanıcı hosting yönetim paneline giriş işlemi gerçekleştirir. Hesap bilgilerini hatırlamayan kullanıcıların ise servis sağlayıcılarıyla iletişime geçmeleri gerekir. Bu bilgilere sahipseniz, cPanel için admin girişi sırasında farklı yollar izleyebilirsiniz. Bunlardan biri, adres çubuğunda web site alan adı ve uzantısını kullanmaktır. Bu kısımların ardından :2082 veya :2083 ifadeleri cPanel kullanıcı arayüzüne ulaşmanızı sağlar. Bunlardan ilki SSL sertifikası olmayan siteler için, ikincisi ise SSL sertifikası olan siteler içindir. Veya dilerseniz IP adresi üzerinden de giriş işlemi yapabilirsiniz. İlgili IP adresinin ardından aynı ifadelerle giriş sağlarsınız.

Eğer WHM üzerinden giriş yapmak isterseniz bu durumda adres çubuğuna site alan adı ve uzantısının ardından :2096 yazmanız gerekir. Nitekim hosting firmaları ve servis sağlayıcılar bazen cPanel için değil de WHM için kullanıcı adı ve şifre bilgileri verirler. Böyle bir durumda öncelikle WHM panelini açmalısınız. Ardından cPanel’i tıklayarak aşağıdaki işlemlerle veritabanı database oluşturma işlemlerinizi gerçekleştirebilirsiniz.</p>

<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">MySQL Veritabanı Nedir?</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Bugüne kadar cPanel üzerinden veritabanı oluşturma işlemi gerçekleştirmediyseniz MySQL’in ne demek olduğunu merak ediyor olabilirsiniz. Kısaca ifade etmek gerekirse MySQL, İngilizce My Structured Query Language ifadesinin kısaltmasıdır. Türkçe anlamı Yapısal Sorgu Dili demektir. MySQL veritabanı;

• Güçlü ve hızlı bir ilişkisel veritabanı yönetimine sahiptir.
• Ücretsiz versiyonu olduğu gibi ücretli versiyonu da vardır.
• Açık kaynaklı olduğu için kullanımı daha kolaydır.
• PHP’nin yanı sıra ASP.NET dilleriyle de kullanımı mümkündür.
• Daha çok web sunucularında ön plandadır. Ayrıca Unix ve Windows tabanlı platformlarda da sorunsuz çalışır.
• Ücretsiz versiyonları pek çok web site için yeterlidir. Bu yüzden örneğin KOBİ’ler için web hosting yönetimi alanında yaygın bir kullanıma sahiptir.
• Amatör web sitelerin yanı sıra profesyonel web siteler de cPanel’de MySQL veritabanı oluşturma yöntemlerine ilgi duyar.
• cPanel’de MySQL Database Wizard kurulum sihirbazını açar. Bu kısmı kullanarak veritabanı oluşturma işlemlerinizi kolayca gerçekleştirirsiniz.</p>
<p class="text-white [font-family:Raleway] text-[1.525vw] font-bold leading-[6.4815vh]">cPanel’de Adım Adım MySQL Veritabanı Oluşturmak</p>
<p class="text-[#9B9B9B] [font-family:Raleway] text-[.9375vw] font-medium leading-[154%]">Yazımızın bu kısmında cPanel’de veritabanı oluşturmak için yapmanız gerekenler hakkında kısa ve özet bilgiler paylaşacağız. Bu süreçte sorun yaşamamak için adımları doğru sırada ve doğru şekilde yapmalısınız.

Adım: cPanel giriş sayfanızı açın. Yukarıda anlattığımız yöntemlerden biriyle kullanıcı adınızı ve şifrenizi girerek Oturum Açma butonuna basın.
Adım: Veritabanları kısmında phpMyAdmin, MySQL Veritabanları, MySQL Veritabanı Sihirbazı ve Uzak MySQL sekmelerini göreceksiniz. cPanel’de veritabanı yönetimi için bu sekmelerin her biri farklı çözümler sunar. Yeni veritabanı oluşturmak için MySQL Veritabanları veya MySQL Veritabanı Sihirbazı sekmesini tıklayabilirsiniz.
Adım: MySQL Veritabanları sekmesini tıkladığınızda karşınıza Yeni Veritabanı Oluştur bölümü çıkar. Bu kısımda veritabanınıza bir isim verin. Bu ismi verirken Türkçe karakter veya özel işaretler kullanmayın. Veritabanı ismi için örneğin veritabani uygun bir isimdir. Belirlediğiniz ismi Yeni Veritabanı: ifadesinin altındaki kutucuğa yazın. Bu kutucuğun baş tarafında özel bir ön ek vardır. Bu ön ek, hosting hizmetinizin FTP kullanıcısını gösterir.
Adım: Veritabanınızın tam ismi baş taraftaki ön ekle birlikte oluşur. Kutucuğa mesela ornekveritabani yazdığınızda database ismi dahanet_ornekveritabani şeklinde oluşur. Bu işlemin ardından Veritabanı Oluştur butonuna basın. Böylelikle cPanel’de veritabanı oluşturmak için yapmanız gerekenler arasında MySQL veritabanı oluşturma işleminiz gerçekleşmiş olacaktır. Bu süreçte herhangi bir sorunla karşılaşırsanız işlemleri kontrol edip doğru adımları atmanız gerekir.</p>
        `,
        görsel: "./src/images/pexels-pixabay-39284.jpg",
        kaynakca: "https://www.daha.net/blog/cpanelde-veritabani-olusturmak-icin-yapmaniz-gerekenler/"
      },
    ],
    selectedItem: null,
    hakkimda: false,
    anasayfa: true,
  }),

  methods: {
    hakkinda() {
      this.hakkimda = true;
      this.selectedItem = null; 
      this.anasayfa = false; 
      document.title = "Host Sefa | Hakkında";
    },
    detaygoster(item) {
      this.selectedItem = item; 
      document.title = item.baslik;
      this.anasayfa = false; 
      this.hakkimda = false;
    },
    geridon() {
      this.selectedItem = null; 
      this.anasayfa = true; 
      this.hakkimda = false;
      document.title = "Host Sefa | Anasayfa";
    },
    ilk100getir(html) {
      let text = html.replace(/<\/?[^>]+(>|$)/g, ""); 
      let words = text.split(/\s+/); 
      let ilk100 = words.slice(0, 10).join(" ");
      return ilk100;
    }
   
  },
  

  computed: {
   
  },

  mounted() {
  

  },

  destroyed() {

  },
  created() {

  },
  beforeDestroy() {
  },
});

app.use(store).mount("#app");

