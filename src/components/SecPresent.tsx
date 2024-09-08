import Image from "next/image";
import daMob from "../../public/assets/DA-mob.png";
import daWeb from "../../public/assets/DA-web.png";
import wsMob from "../../public/assets/ws-mob.png";
import wsWeb from "../../public/assets/ws-web.png";
//

const SecPresent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#2d2514] to-[#1a160f] px-[16px] py-[48px] lg:py-[48px] lg:px-[96px] mx-auto">
      <div className=" w-full flex flex-wrap lg:flex-nowrap lg:flex-row-reverse  gap-10 items-center justify-center mb-12">
        <Image
          src={daMob}
          alt="dr ahmed"
          className="lg:hidden"
          width={368}
          height={439}
        />
        <Image
          src={daWeb}
          alt="dr ahmed"
          className="hidden lg:block w-[606px] h-[751px]"
          width={606}
          height={751}
        />
        <div>
          <h2 className="text-white font-[pnu-bold] mb-10 text-[40px] lg:text-[48px]">
            د.أحمد الدملاوي
          </h2>
          <p className="text-white font-[pnu-regular] text-[20px] py-4">
            طبيب متمرس تخرج من كلية الطب جامعة عين شمس عام 1982 وُيعد د.أحمد
            استشاریااستشارياً مشهورامشهوراً في مجال التحول والتطوير والاستشفاء
            الذاتي حيث كرس في حياته أكثر من ٢٥ عاماعاماً في التدريب على اتزان
            الشعورالإنساني وتصنيفه وتنظيمه.
          </p>
          <p className="text-white font-[pnu-regular] text-[20px] py-4">
            يعد د/أحمد الطبيب الوحيد في العالم العربي الذي يعتمد في تشخيص وعلاج
            عملائة على منظور علاجي وتدريبي ينبع من تشخيص النفس بالألوان وتشخيص
            المرض بالسبب النفسي له , منذ عام 2012 حتى الآن. أستاذ مدرب علم
            الميتاھيلث ونائب رئيس الجمعية العالمية للميتا ماديسون بالولايات
            المتحدة الأمريكية IMMA. (سابقا سابقاً) .
          </p>
          <p className="text-white font-[pnu-regular] text-[20px] py-4">
            علم الميتاھيلث ھو منظور جديد للطب ينبع من منظور الشفاء وليس المرض
            حاصل على درجة ماجستير في إدارة الأعمال من ESLSCA® <br /> حاصل على
            شهادة تدريب الممارسين من المعهد الدولى للألوان بجريس بألمانيا ومؤسسة
            لوشر للتشخيص بالألوان بسويسرا. قام بدراسات عليا في الهندسة الطبية من
            جامعة واشنطن بالولايات المتحدة الأمريكية عام 1990.  Landmark
            Education® 1992-1993 في مؤسسة ontology درس علم النفس <br />{" "}
            بالولايات المتحدة الأمريكية و2006-2007 بالمملكة المتحدة. أعد ونشر
            العديد من الأبحاث في مجال الأشعة التشخيصية بجامعة واشنطن بسياتل
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-wrap lg:flex-nowrap   gap-10 items-center justify-center">
        <Image
          src={wsMob}
          alt="dr Will"
          className="lg:hidden"
          width={368}
          height={439}
        />
        <Image
          src={wsWeb}
          alt="dr Will"
          className="hidden lg:block w-[606px] h-[751px]"
          width={606}
          height={500}
        />
        <div>
          <h2 className=" self-stretch mb-10 text-white text-right font-[700] font-[pnu-bold] text-[40px] md:[48px] lg:text-5xl  leading-[140%]">
            Will steel
          </h2>
          <p className="text-white font-[pnu-regular] text-[20px] py-4">
            ُيعد ويليام ستيل قائدا قائداً مشهورامشهوراً وخبيراوخبيراً في مجال
            التحول القيادي حيث كرَّ س 21 عاماعاماً من حياته المهنية في مجال
            القيادة قام بقيادة البرامج التحويلية التي أثرت على حياة أكثر من 90
            ألف فرد في 26 دولة <br /> تمتد براعة ويل التدريبية الي المديرين
            التنفيذيين , كبار المديرين التنفيذيين , رجال الأعمال , العلماء,
            السياسيين ,علماء النفس ,الرياضيون ,المشاھير والموسيقيين <br /> حصل
            على درجة البكالوريوس مع مرتبة الشرف في الهندسة الالكترونية من BTEC و
            Liverpool University <br /> في الهندسة الكهربائية والميكانيكية من
            Huddersfield FORUM LEADER لشركة لاند مارك العالمية لأكثر من 21 سنة
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecPresent;
