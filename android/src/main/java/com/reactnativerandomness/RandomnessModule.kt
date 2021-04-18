package com.reactnativerandomness

import android.util.Base64
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.security.SecureRandom




class RandomnessModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Randomness"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun randomBytes(length: Int, promise: Promise) {

      val data = ByteArray(length)
      val random = SecureRandom()

      random.nextBytes(data)
      val base64 = Base64.encodeToString(data, Base64.NO_WRAP)

      promise.resolve(base64)
    }

}
