import { Validators} from '@angular/forms';


 export function initForm(formGroup,fb,initRewardsItem,initChildrenItem,initApartmentsItem){
        formGroup = fb.group({
          name: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
          surname: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
          fathername: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
          birthdate: ['',[Validators.required]],
          familyAddress: ['', [Validators.required,Validators.maxLength(250), Validators.minLength(2)]],
          regionId: ['', [Validators.min(0)]],
          dateOfMartyrdomOrVeteran: ['',[Validators.required]],
          contactInfo: ['', [Validators.required,Validators.maxLength(250), Validators.minLength(1)]],
          fin: ['', [Validators.maxLength(7), Validators.minLength(7)]],
          identityPhotoId: [''],
          rewards: fb.array([initRewardsItem]),
          children: fb.array([initChildrenItem]),
          apartments: fb.array([initApartmentsItem])
        });
}

     
