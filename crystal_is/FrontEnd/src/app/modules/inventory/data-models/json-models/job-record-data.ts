import { TimeRecordData } from './time-record-data';
import { UsageRecordData } from './usage-record-data';

export interface JobRecordData {
    usage:[UsageRecordData];
    time :[TimeRecordData];

}