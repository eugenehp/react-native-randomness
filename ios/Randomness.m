#import "Randomness.h"

@implementation Randomness

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(random,
                 randomWithLength:(nonnull NSNumber*)length
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
    NSMutableData *data = [NSMutableData dataWithLength:[length integerValue]];
    
    int result = SecRandomCopyBytes(kSecRandomDefault, [length integerValue], data.mutableBytes);
    if (result != errSecSuccess) {
        NSError *error = [[NSError alloc] initWithDomain:NSPOSIXErrorDomain
                        code:result userInfo:nil];
        
        reject(@"error", @"Failed to generate random bytes using secure methods.", error);
    }
    
    // NSLog(@"Generated random data, %@", data);
    
    resolve([data base64EncodedStringWithOptions:0]);
}

@end
