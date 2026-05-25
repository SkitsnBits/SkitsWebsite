import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import staffListData from '../../../../public/data/staff_list.json';

interface StaffMember {
  name: string;
  image: string;
}

interface StaffData {
  founder: StaffMember[];
  staff: StaffMember[];
  retired: StaffMember[];
}

@Component({
  selector: 'app-staff-page',
  imports: [CommonModule],
  templateUrl: './staff-page.component.html',
  styleUrl: './staff-page.component.scss'
})
export class StaffPageComponent {
  staffData: StaffData = staffListData;
  founders: StaffMember[] = staffListData.founder;
  staff: StaffMember[] = staffListData.staff;
  retired: StaffMember[] = staffListData.retired;
}
