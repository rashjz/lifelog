package rashjz.info.app.springboot.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
@Table(name = "content")
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "content_id")
    private int id;

    @Column(name = "title")
    @Length(min = 5, message = "*Please provide a valid title")
    @NotEmpty(message = "*Please provide an title")
    private String title;


    @Column(name = "description")
    private String description;


    @ManyToOne(optional = false, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "type_id")
    public ContentType contentType;


    @Column(name = "insert_date")
    private Date insertDate;


    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "video_path")
    private String videoPath;


    @Column(name = "author")
    private String author;

    @Column(name = "note")
    private String note;

    @Column(name = "status")
    private String status;

    public Content() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ContentType getContentType() {
        return contentType;
    }

    public void setContentType(ContentType contentType) {
        this.contentType = contentType;
    }

    public Date getInsertDate() {
        return insertDate;
    }

    public void setInsertDate(Date insertDate) {
        this.insertDate = insertDate;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getVideoPath() {
        return videoPath;
    }

    public void setVideoPath(String videoPath) {
        this.videoPath = videoPath;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Content{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", contentType=" + contentType +
                ", insertDate=" + insertDate +
                ", imagePath='" + imagePath + '\'' +
                ", videoPath='" + videoPath + '\'' +
                ", author='" + author + '\'' +
                ", note='" + note + '\'' +
                ", status='" + status + '\'' +
                '}';
    }

}
