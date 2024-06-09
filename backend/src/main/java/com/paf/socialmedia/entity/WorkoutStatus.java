package com.paf.socialmedia.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "workout_statuses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutStatus {

    @Id
    private String _id;
    private String userId;
    private double distanceRun;
    private int numberOfPushups;
    private int weightLifted;
    private String description;
    
}