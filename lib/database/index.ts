import mongoose from "mongoose";
//Mongoose, MongoDB ile etkileşimde bulunmayı kolaylaştıran bir Object Data Modeling (ODM) kütüphanesidir.

const MONGODB_URI = process.env.MONGODB_URI;
//process.env.MONGODB_URI ifadesi, MongoDB bağlantı URI'sini almak için kullanılır. Bu genellikle çevresel değişkenler (environment variables) yoluyla sağlanır. Bu, güvenlik ve konfigürasyon yönetimi açısından genellikle tercih edilen bir uygulama tasarımıdır.

let cached = (global as any).mongoose || { conn: null, promise: null };
//Bu satır, bağlantının önbelleğini tutan bir nesne oluşturur. Bu önbellek, birden çok bağlantı isteğini tek bir bağlantıya indirgemek için kullanılır. Bu, performansı artırabilir ve gereksiz bağlantı açma maliyetini azaltabilir.

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

//Bu fonksiyon, MongoDB'ye bağlanmak için kullanılır. İlk olarak, önbellekte (cached.conn) bir bağlantı varsa bu bağlantı döndürülür. Eğer bağlantı yoksa veya önbellekteki bağlantı kapalıysa, MongoDB URI kontrol edilir ve eğer URI mevcut değilse bir hata fırlatılır.Eğer URI mevcutsa, mongoose.connect fonksiyonu kullanılarak MongoDB'ye bağlanılır. Bağlantı bir promise olarak saklanır ve önbelleğe (cached.promise) atanır.Son olarak, cached.conn önbelleğe atanan bağlantı döndürülür. Eğer bu noktaya kadar gelindiği anlamına gelirse, bağlantı başarıyla oluşturulmuş demektir.

//Bu kod, Node.js ortamında MongoDB'ye bağlanmak için kullanılan bir Mongoose bağlantı örneğidir.
