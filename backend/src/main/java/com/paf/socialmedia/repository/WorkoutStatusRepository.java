package com.paf.socialmedia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.socialmedia.entity.WorkoutStatus;



@Repository
public interface WorkoutStatusRepository extends MongoRepository<WorkoutStatus, String>{
    
}
