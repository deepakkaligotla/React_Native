//
//  DatePickerModuleWrapper.m
//  AllComponents
//
//  Created by Deepak Kaligotla on 09/01/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DatePicker, NSObject)

RCT_EXTERN_METHOD(openDatePicker:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
