package com.paf.socialmedia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.socialmedia.entity.WorkoutStatus;
import com.paf.socialmedia.service.WorkoutStatusService;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/workoutStatus")
public class WorkoutStatusController {

    @Autowired
    private WorkoutStatusService workoutStatusService;

    @PostMapping(value = "/save")
    private String saveWorkoutStatus(@RequestBody WorkoutStatus workout_statuses)
    {

        workoutStatusService.saveOrUpdate(workout_statuses);
        return workout_statuses.get_id();
    }

    @GetMapping(value = "/getAll")
    private Iterable<WorkoutStatus>getWorkoutStatuses()
    {
        return workoutStatusService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private WorkoutStatus update(@RequestBody WorkoutStatus workoutStatus,@PathVariable(name = "id")String _id)
    {
        workoutStatus.set_id(_id);
        workoutStatusService.saveOrUpdate(workoutStatus);
        return workoutStatus;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteWorkoutStatus(@PathVariable("id")String _id)
    {
        workoutStatusService.deleteWorkoutStatus(_id);
    }

    @RequestMapping("/search/{id}")
    private WorkoutStatus getWorkoutStatusById(@PathVariable("id")String _id)
    {
        return workoutStatusService.getWorkoutStatusById(_id);
    }

}
