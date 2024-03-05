using idcheck as idc from '../db/schema';
 

 service MyService {
 @odata.draft.enabled
 
 entity college as projection on idc.college;   
 
 }